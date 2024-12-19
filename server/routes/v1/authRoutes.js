const router = require('express').Router()
const authController = require('../../controllers/auth/authController');

router.post('/create', authController.createUser);
router.post('/login', authController.login);
router.get('/me',authController.checkUser);

module.exports = router;