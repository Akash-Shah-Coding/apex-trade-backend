const axios = require("axios");
const { generateTOTP } = require("../utils/totpGenerator");
const { Token } = require("../models");
const smartAPIURL = process.env.Smart_API_URL;
const { saveOrUpdateToken, getTokenByService } = require("./tokenService");
const jwt = require("jsonwebtoken");
const { getHeaders } = require("../utils/util");

// Login to SmartAPI and store tokens in DB
async function loginToSmartAPI() {
    const totp = generateTOTP();

    const loginPayload = {
        clientcode: process.env.CLIENT_CODE,
        password: process.env.CLIENT_PIN,
        totp: totp,
    };

    try {
        const response = await axios.post(`${smartAPIURL}/auth/angelbroking/user/v1/loginByPassword`, loginPayload, {
            headers: getHeaders()
        });

        const { jwtToken, refreshToken, feedToken } = response.data.data;

        // Check if SmartAPI token already exists in the DB and update if necessary
        const tokenRecord = await Token.findOne({ where: { serviceName: "SmartAPI" } });

        if (tokenRecord) {
            // Token exists, update it
            await Token.update(
                { jwtToken, refreshToken, feedToken },
                { where: { serviceName: "SmartAPI" } }
            );
            console.log("SmartAPI Tokens updated successfully.");
        } else {
            // Token does not exist, insert new record
            await Token.create({
                serviceName: "SmartAPI",
                jwtToken,
                refreshToken,
                feedToken,
            });
            console.log("SmartAPI Tokens stored successfully.");
        }

        return { jwtToken, refreshToken, feedToken };
    } catch (error) {
        console.error("Error logging into SmartAPI:", error);
        throw error;
    }
}

// Refresh JWT token
async function refreshToken(refreshToken, AuthToken) {
    try {
        const response = await axios.post(`${smartAPIURL}/auth/angelbroking/jwt/v1/generateTokens`, {
            refreshToken: refreshToken,
        },
            { headers: getHeaders(AuthToken) }
        );
        if (response.data.data) {
            const { jwtToken } = response.data.data;
            await Token.update({ jwtToken }, { where: { serviceName: "SmartAPI" } });
        } else {
            console.log("Falling back to login...");
            const newTokens = await loginToSmartAPI();
            return newTokens.jwtToken;
        }
        // Update jwtToken in DB

        console.log("JWT Token refreshed successfully.");
        return jwtToken;
    } catch (error) {
        console.error("Error refreshing token:", error);
        throw error;
    }
}

// Function to get a valid token (refresh if needed)
async function getValidToken() {
    const serviceName = "SmartAPI";

    try {
        // Step 1: Check for an existing token
        const tokenRecord = await getTokenByService(serviceName);

        // If token exists, check if it's expired
        if (tokenRecord && tokenRecord.jwtToken) {
            const decodedToken = jwt.decode(tokenRecord.jwtToken);
            const currentTime = Math.floor(Date.now() / 1000);  // Current time in seconds

            // Step 2: Check if the token is expired
            if (decodedToken && decodedToken.exp > currentTime) {
                console.log("Using existing SmartAPI token");
                return tokenRecord.jwtToken;  // Token is valid, use it
            } else {
                console.log("Token expired. Refreshing...");
                // Step 3: If token is expired, refresh the token
                const newJwtToken = await refreshToken(tokenRecord.refreshToken, tokenRecord.jwtToken);
                return newJwtToken;
            }
        }

        // Step 4: If no token exists, login to generate a new one
        const newTokens = await loginToSmartAPI();
        await saveOrUpdateToken(serviceName, newTokens);
        return newTokens.jwtToken;
    } catch (error) {
        console.error("Error fetching valid token:", error.message);
        throw error;
    }
}

module.exports = { loginToSmartAPI, refreshToken, getValidToken };
