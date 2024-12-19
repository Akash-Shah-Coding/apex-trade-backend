const express = require("express");
const router = express.Router();
const { fetchMarketData } = require("../../../controllers/homeControllers/marketController");
const passport = require('../../../config/passport')

// Route to fetch market data
router.post("/market", passport.authenticate("jwt", { session: false }), fetchMarketData);

module.exports = router;
