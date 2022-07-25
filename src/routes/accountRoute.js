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

/**
 * @swagger
 *  components:
 *    schemas:
 *       Account:
 *           type: object
 *           required:
 *            - codCliente
 *           properties:
 *              codClinete:
 *                  type: string
 *              saldo:
 *                  type: number
 */
// /**
//  * @swagger
//  *   /account/:codCliente:
//  *     get:
//  *       tags:
//  *         [Account]
//  *       description: Endpoint retorna a conta do cliente
//  *       responses:
//  *        200:
//  *         content:
//  *           appliccation/json:
//  *            schema:
//  *              type: array
//  *              items:
//  *                $ref: '#/components/schemas/Account'
//  */
router.get('/account/:codCliente', controller.getCodCliente);
router.post('/account/withdraw', withdrawMiddle, controller.addWithdraw);
router.post('/account/deposit', depositMiddle, controller.addDeposit);

module.exports = router;