const finnhubClient = require('../config/finnhub');

// Emit live news every minute
const emitLiveNews = (io) => {
    const symbol = 'AAPL'; // Change as needed
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 7);

    setInterval(() => {
        finnhubClient.companyNews(symbol, fromDate.toISOString().split('T')[0], new Date().toISOString().split('T')[0], (error, data) => {
            if (!error && data.length > 0) {
                console.log("Emitting news:", data); 
                io.emit('liveNews', data); // Emit live news to connected clients
            }
        });
    }, 6000); // Fetch every minute
};

// Controller function to get financial news
const getFinancialNews = async (req, res) => {
    const symbol = 'AAPL'; // Change as needed
    const fromDate = new Date();
    const toDate = new Date();
    fromDate.setDate(fromDate.getDate() - 7);

    try {
        finnhubClient.companyNews(symbol, fromDate.toISOString().split('T')[0], toDate.toISOString().split('T')[0], (error, data) => {
            if (error) {
                console.error(error);
                return res.status(500).send('Error fetching news');
            }
            if (!data || data.length === 0) {
                return res.status(404).send('No news available for this symbol');
            }
            res.send(data);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).send('Error fetching news');
    }
};

module.exports = {
    getFinancialNews,
    emitLiveNews,
};
