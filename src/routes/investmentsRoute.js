const express = require('express');
const controller = require('../controllers/investmentsController')
const router = express.Router();
// const purchaseMiddle = require('../middlewares/purchaseMiddleware');

router.post('/investments/purchase', controller);

module.exports = router;