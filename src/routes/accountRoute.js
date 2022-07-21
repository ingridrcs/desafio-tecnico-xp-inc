const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');
const withdrawMiddle = require('../middlewares/withdrawMiddleware');

router.get('/account/:codCliente', controller.getCodCliente);
router.post('/account/withdraw', withdrawMiddle, controller.addWithdraw);

module.exports = router;