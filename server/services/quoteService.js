const finnhubClient = require('../config/finnhub');

// Fetching real-time quotes from Finnhub
async function fetchQuote(symbol) {
  return new Promise((resolve, reject) => {
    finnhubClient.quote(symbol, (error, data, response) => {
      if (error) {
        return reject(error);
      }
      console.log("====> data ", data);
      resolve(data);
    });
  });
}

module.exports = {
  fetchQuote,
};
