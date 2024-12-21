require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;
const db = require('./config/db');
const quoteRoutesV1 = require('./routes/v1/index');
const { emitLiveNews } = require('./services/FinnhubServices')
const server = http.createServer(app);
const io = new Server(server);
const crypto = require('crypto')

// Start emitting live news
// emitLiveNews(io);

// Enable CORS for a specific origin 
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173', 'https://apextrader.netlify.app'], 
})); 

app.set('trust proxy',1);

app.use(cookieParser());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
app.use('/api/v1', quoteRoutesV1);

// Socket connection
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// io.on('liveNews', (newNews) => {
//     console.log("news", newNews);
// });

const apiKey = '3qa844qw9w2rziww';
const apiSecret = 'f8ie6sxwyjjd20tuzfqqziql923kd0dk';

app.get('/redirect', (req, res) => {
    const requestToken = req.query.request_token;
    if (!requestToken) { return res.status(400).json({ error: 'request_token is required' }); }
    // Generate checksum 
    const data = apiKey + requestToken + apiSecret; const checksum = crypto.createHash('sha256').update(data).digest('hex');
    // Respond with the api_key, request_token, and api_secret
    res.json({ api_key: apiKey, request_token: requestToken, api_secret: apiSecret, checksum: checksum });
})
// Home -test 
app.get('/', (req, res) => {
    res.send('Working... Hello backend')
})

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
        await db.query('SELECT NOW()');
    } catch (err) {
        console.error('Database connection failed', err);
    }
});
