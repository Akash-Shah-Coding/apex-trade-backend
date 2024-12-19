const { fetchQuote } = require('../services/quoteService');

// Get Quote by Symbol
const getQuote = async (req, res) => {
  const { symbol } = req.params;
  console.log("symbol ", symbol);
  try {
    const data = await fetchQuote(symbol);
    res.status(200).json({
        script: symbol,
        currentPrice: data.c, // Last price
        bid: data.b,          // Bid price
        ask: data.a,          // Ask price
        high: data.h,         // High price
        low: data.l,          // Low price
        lastPrice: data.c,    // Last price
        open: data.o,         // Opening price (fetch separately if needed)
        previousClose: data.pc,// Previous close price
        change: data.d,       // Change in price
        changePercentage: data.dp,// Change percentage
        timestamp: new Date(data.t * 1000) // Convert Unix timestamp to Date
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quote', error });
  }
};

module.exports = {
  getQuote,
};
