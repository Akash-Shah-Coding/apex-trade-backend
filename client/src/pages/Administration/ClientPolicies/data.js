
// Client script 
export const data = [
    {
        "scriptName": "MCX",
        "openComType": "Fixed",
        "openComValue": "10.5",
        "closeComType": "Percentage",
        "closeComValue": "2%",
        "intradayComType": "Fixed",
        "intradayComValue": "5.0"
    },
    {
        "scriptName": "NSE",
        "openComType": "Percentage",
        "openComValue": "1.5%",
        "closeComType": "Fixed",
        "closeComValue": "15.0",
        "intradayComType": "Percentage",
        "intradayComValue": "1.2%"
    },
    {
        "scriptName": "BSE",
        "openComType": "Fixed",
        "openComValue": "8.0",
        "closeComType": "Percentage",
        "closeComValue": "1.8%",
        "intradayComType": "Fixed",
        "intradayComValue": "4.0"
    },
    {
        "scriptName": "NYSE",
        "openComType": "Percentage",
        "openComValue": "2.0%",
        "closeComType": "Fixed",
        "closeComValue": "12.0",
        "intradayComType": "Percentage",
        "intradayComValue": "1.5%"
    },
    {
        "scriptName": "NASDAQ",
        "openComType": "Fixed",
        "openComValue": "9.0",
        "closeComType": "Percentage",
        "closeComValue": "2.2%",
        "intradayComType": "Fixed",
        "intradayComValue": "6.0"
    }
]

export const columns = [
    'scriptName',
    'openComType',
    'openComValue',
    'closeComType',
    'closeComValue',
    'intradayComType',
    'intradayComValue'
];

// Robo policy 
export const Robocolumns = [
    'Script',
    'Market Handling Mode',
    'Market Handling Value (Time/Ticks)',
    'Market Handling Markup/Slippage',
];

export const Robodata = [
    {
        "Script": "MCX",
        "Market Handling Mode": "Best price",
        "Market Handling Value (Time/Ticks)": "5",
        "Market Handling Markup/Slippage": "0",
    },
    {
        "Script": "NSE",
        "Market Handling Mode": "Limit order",
        "Market Handling Value (Time/Ticks)": "10",
        "Market Handling Markup/Slippage": "2",
    },
    {
        "Script": "BSE",
        "Market Handling Mode": "Market order",
        "Market Handling Value (Time/Ticks)": "7",
        "Market Handling Markup/Slippage": "1",
    },
    {
        "Script": "NASDAQ",
        "Market Handling Mode": "Best price",
        "Market Handling Value (Time/Ticks)": "12",
        "Market Handling Markup/Slippage": "3",
    },
    {
        "Script": "FTSE",
        "Market Handling Mode": "Limit order",
        "Market Handling Value (Time/Ticks)": "4",
        "Market Handling Markup/Slippage": "0.5",
    },
    {
        "Script": "DAX",
        "Market Handling Mode": "Market order",
        "Market Handling Value (Time/Ticks)": "8",
        "Market Handling Markup/Slippage": "0.3",
    },
    {
        "Script": "HSI",
        "Market Handling Mode": "Best price",
        "Market Handling Value (Time/Ticks)": "6",
        "Market Handling Markup/Slippage": "1.2",
    }
];

// Account policy
export const Accountolumns = [
    'Script',
    'Enable',
    'Same Direction',
    'Opposite If Close Not Found',
    'Copy By Equity Ratio',
    'Types to Mirror',
    'Orders to Mirror',
    'Percentage',
    'Slippage'
];

export const Accountdata = [
    {
        "Script": "MCX",
        "Enable": true,
        "Same Direction": true,
        "Opposite If Close Not Found": false,
        "Copy By Equity Ratio": true,
        "Types to Mirror": "Both",
        "Orders to Mirror": "Both",
        "Percentage": 100,
        "Slippage": 0
    },
    {
        "Script": "NSE",
        "Enable": true,
        "Same Direction": false,
        "Opposite If Close Not Found": true,
        "Copy By Equity Ratio": false,
        "Types to Mirror": "Buy",
        "Orders to Mirror": "Limit",
        "Percentage": 75,
        "Slippage": 1.5
    },
    {
        "Script": "BSE",
        "Enable": false,
        "Same Direction": true,
        "Opposite If Close Not Found": false,
        "Copy By Equity Ratio": true,
        "Types to Mirror": "Sell",
        "Orders to Mirror": "Market",
        "Percentage": 50,
        "Slippage": 2
    },
    {
        "Script": "NASDAQ",
        "Enable": true,
        "Same Direction": false,
        "Opposite If Close Not Found": true,
        "Copy By Equity Ratio": true,
        "Types to Mirror": "Both",
        "Orders to Mirror": "Both",
        "Percentage": 90,
        "Slippage": 1
    },
    {
        "Script": "FTSE",
        "Enable": true,
        "Same Direction": true,
        "Opposite If Close Not Found": false,
        "Copy By Equity Ratio": false,
        "Types to Mirror": "Buy",
        "Orders to Mirror": "Limit",
        "Percentage": 65,
        "Slippage": 0.75
    },
    {
        "Script": "DAX",
        "Enable": false,
        "Same Direction": false,
        "Opposite If Close Not Found": true,
        "Copy By Equity Ratio": true,
        "Types to Mirror": "Sell",
        "Orders to Mirror": "Market",
        "Percentage": 80,
        "Slippage": 1.25
    },
    {
        "Script": "HSI",
        "Enable": true,
        "Same Direction": true,
        "Opposite If Close Not Found": false,
        "Copy By Equity Ratio": false,
        "Types to Mirror": "Both",
        "Orders to Mirror": "Both",
        "Percentage": 100,
        "Slippage": 0.5
    }
];

// Agent Commision 
export const Agentcolumns = [
    'Script',
    'Broker Commission?',
    'Open Com. Type',
    'Open Com. Value',
    'Close Com. Type',
    'Close Com. Value',
];

export const Agentdata = [
    {
        "Script": "MCX",
        "Broker Commission?": false,
        "Open Com. Type": "Fixed",
        "Open Com. Value": 0,
        "Close Com. Type": "Fixed",
        "Close Com. Value": 0,
    },
    {
        "Script": "NSE",
        "Broker Commission?": true,
        "Open Com. Type": "Percentage",
        "Open Com. Value": 0.05, // 5% commission
        "Close Com. Type": "Percentage",
        "Close Com. Value": 0.05, // 5% commission
    },
    {
        "Script": "BSE",
        "Broker Commission?": true,
        "Open Com. Type": "Fixed",
        "Open Com. Value": 100, // Fixed value of 100 for opening trades
        "Close Com. Type": "Percentage",
        "Close Com. Value": 0.1, // 10% for closing trades
    },
    {
        "Script": "NASDAQ",
        "Broker Commission?": false,
        "Open Com. Type": "Fixed",
        "Open Com. Value": 0,
        "Close Com. Type": "Fixed",
        "Close Com. Value": 0,
    },
    {
        "Script": "FTSE",
        "Broker Commission?": true,
        "Open Com. Type": "Percentage",
        "Open Com. Value": 0.02, // 2% commission on opening
        "Close Com. Type": "Fixed",
        "Close Com. Value": 50,  // Fixed value of 50 for closing trades
    },
    {
        "Script": "DAX",
        "Broker Commission?": true,
        "Open Com. Type": "Fixed",
        "Open Com. Value": 150,  // Fixed commission of 150 for opening trades
        "Close Com. Type": "Fixed",
        "Close Com. Value": 200, // Fixed commission of 200 for closing trades
    },
    {
        "Script": "HSI",
        "Broker Commission?": false,
        "Open Com. Type": "Percentage",
        "Open Com. Value": 0,
        "Close Com. Type": "Percentage",
        "Close Com. Value": 0,
    }
];


