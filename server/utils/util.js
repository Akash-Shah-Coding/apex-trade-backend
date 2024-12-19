function getHeaders(authToken = "") {
    return {
        ...(authToken && { "Authorization": `Bearer ${authToken}` }),
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-UserType": "USER",
        "X-SourceID": "WEB",
        "X-ClientLocalIP": "192.168.0.100", 
        "X-ClientPublicIP": "203.0.113.1", 
        "X-MACAddress": "00:1A:2B:3C:4D:5E", 
        "X-PrivateKey": process.env.API_KEY, 
    };
}


module.exports = { getHeaders };
