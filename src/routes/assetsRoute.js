const express = require('express');
const router = express.Router();
const assetsController = require('../controllers/assetsController');

router.get('/assets/:CodAtivo', assetsController);

module.exports = router;