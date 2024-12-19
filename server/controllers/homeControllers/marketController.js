const { getValidToken } = require("../../services/SmartApiService");
const axios = require("axios");

// Fetch Market Data
async function fetchMarketData(req, res) {
    try {
        const { mode, exchangeTokens } = req.body;

        // Validate input
        if (!mode || !exchangeTokens) {
            return res.status(400).json({ message: "Mode and exchangeTokens are required." });
        }

        const jwtToken = await getValidToken();

        const marketPayload = {
            mode: mode,
            exchangeTokens: exchangeTokens,
        };

        const response = await axios.post(
            `${process.env.Smart_API_URL}/secure/angelbroking/market/v1/quote`, 
            marketPayload,
            {
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "X-PrivateKey": process.env.API_KEY,
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching market data:", error.message);
        res.status(500).json({ message: "Failed to fetch market data" });
    }
}

module.exports = { fetchMarketData };
