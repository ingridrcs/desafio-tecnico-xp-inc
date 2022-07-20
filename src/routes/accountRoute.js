const express = require('express');
//import addAccount from '../controllers/accountController';
const router = express.Router();
const getCodCliente = require('../controllers/accountController')

//router.post('/account', addAccount);
router.get('/account/:codCliente', getCodCliente);

module.exports = router;