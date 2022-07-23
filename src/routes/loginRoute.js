const express = require('express');
const router = express.Router();
const loginUser = require('../controllers/loginController');
const loginMiddle = require('../middlewares/loginMiddleware');

router.post('/login', loginMiddle, loginUser);

module.exports = router;

