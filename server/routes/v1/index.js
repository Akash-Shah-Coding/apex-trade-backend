const router = require('express').Router();

// User Authentication  
router.use('/user',require('./authRoutes'));

//----------- Home Section --------------
router.use('/home',require('./homeRoutes/marketRoutes'))

//----------- View Section --------------
router.use('/view', require('./viewsRoutes/viewsRoutes'))


module.exports= router;