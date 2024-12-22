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
const server = http.createServer(app);
const io = new Server(server);

// Enable CORS for a specific origin 
const isProduction = process.env.NODE_ENV === 'production';

const corsOptions = {
    credentials: true,
    origin: isProduction ? 'https://apextrader.netlify.app' : 'http://localhost:5173'
};

app.use(cors(corsOptions));

app.set('trust proxy', 1);

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

// Home 
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
