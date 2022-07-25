const express = require('express');
const router = express.Router();
const assetsController = require('../controllers/assetsController');


/**
 * @swagger
 *  tags:
 *    name: Assets
 *    description: Endpoints de Assets
 */
router.get('/assets/:CodAtivo', assetsController.getByAssets);
router.get('/assets/clients/:CodCliente', assetsController.getByClients);

module.exports = router;