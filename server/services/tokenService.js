const {Token} = require("../models");

async function saveOrUpdateToken(serviceName, tokens) {
    try {
        await Token.upsert({
            serviceName: serviceName,
            jwtToken: tokens.jwtToken || null,
            refreshToken: tokens.refreshToken || null,
            feedToken: tokens.feedToken || null
        });
        console.log(`Token for ${serviceName} saved or updated successfully.`);
    } catch (error) {
        console.error("Error saving or updating token:", error.message);
        throw error;
    }
}


async function getTokenByService(serviceName) {
    try {
        const token = await Token.findOne({ where: { serviceName } });
        return token;
    } catch (error) {
        console.error("Error fetching token:", error.message);
        throw error;
    }
}

module.exports = { saveOrUpdateToken, getTokenByService };
