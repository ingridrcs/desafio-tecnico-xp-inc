const express = require('express');
const addItens = require('../controllers/investmentsController')
const router = express.Router();

router.post('/investments/purchase', addItens);

module.exports = router;