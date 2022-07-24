const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');
const withdrawMiddle = require('../middlewares/withdrawMiddleware');
const depositMiddle = require('../middlewares/depositMiddleware');

/**
 * @swagger
 *  tags:
 *    name: Account
 *    description: Endpoints de Accounts
 */

router.get('/account/:codCliente', controller.getCodCliente);
router.post('/account/withdraw', withdrawMiddle, controller.addWithdraw);
router.post('/account/deposit', depositMiddle, controller.addDeposit);

module.exports = router;