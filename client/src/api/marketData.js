import axios from "axios";
const MARKET_DATA_URL = import.meta.env.VITE_MARKET_API_URL;
// export const fetchMarketData = async (symbols) => {
//   try {
//     const data = [];

//     for (const symbol of symbols) {
//       const requestBody = {
//         mode: "FULL",
//         exchangeTokens: {
//           NSE: [symbol.token],
//         },
//       };

//       const response = await axios.post(MARKET_DATA_URL, requestBody, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${AUTH_TOKEN}`,
//           "X-PrivateKey": API_KEY,
//         },
//       });

//       const marketData = response.data?.data?.fetched[0];
//       if (marketData) {
//         const bid = marketData.depth?.buy[0]?.price || 0;
//         const ask = marketData.depth?.sell[0]?.price || 0;
//         const spread = ask - bid;

//         data.push({
//           SCRIPT: symbol.symbol,
//           BID: bid,
//           ASK: ask,
//           HIGH: marketData.high,
//           LOW: marketData.low,
//           TIME: marketData.exchFeedTime,
//           LAST_PRICE: marketData.ltp,
//           SPREAD: spread,
//         });
//       }
//     }
//     return data;
//   } catch (error) {
//     console.error("Error fetching market data:", error.message);
//     throw error;
//   }
// };


export const fetchMarketData = async (symbols, batchSize = 10) => {
    const data = [];
  
    for (let i = 0; i < symbols.length; i += batchSize) {
      const batch = symbols.slice(i, i + batchSize);
      const requestBody = {
        mode: "FULL",
        exchangeTokens: {
          NSE: batch.map((symbol) => symbol.token),
        },
      };
  
      try {
        const response = await axios.post(MARKET_DATA_URL, requestBody, {withCredentials: true,});
  
        const fetched = response.data?.data?.fetched || [];
        fetched.forEach((marketData, index) => {
          const buyDepth = marketData.depth?.buy || [];
          const sellDepth = marketData.depth?.sell || [];
  
          data.push({
            SCRIPT: marketData.tradingSymbol,
            BID: buyDepth[0]?.price || 0,
            ASK: sellDepth[0]?.price || 0,
            HIGH: marketData.high,
            LOW: marketData.low,
            TIME: marketData.exchFeedTime,
            LAST_PRICE: marketData.ltp,
            SPREAD: (sellDepth[0]?.price || 0) - (buyDepth[0]?.price || 0),
          });
        });
      } catch (error) {
        console.error("Error fetching batch:", error.message);
      }
  
      // Respect rate limits: 10 requests/sec
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  
    return data;
  };
  