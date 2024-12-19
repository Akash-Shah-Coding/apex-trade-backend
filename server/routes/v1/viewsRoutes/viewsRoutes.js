const router = require('express').Router();
const navigationContoller = require('../../../controllers/viewControllers/navigationContoller');
const newsController = require('../../../services/FinnhubServices')

// Navigation Get User Hirarchy
router.get('/navigator/:userId/children', navigationContoller.getUsersByRole);

// Live News 
router.get('/getnews', newsController.getFinancialNews)

module.exports = router;
