const express = require('express');

const router = express.Router();
const getCodCliente = require('../controllers/accountController')

//router.post('/account', addAccount);
router.get('/account/:codCliente', getCodCliente);


module.exports = router;