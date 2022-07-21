const express = require('express');
const router = express.Router();
const assetsController = require('../controllers/assetsController');

router.get('/assets/:CodAtivo', assetsController.getByAssets);
router.get('/assets/clients/:CodCliente', assetsController.getByClients);

module.exports = router;