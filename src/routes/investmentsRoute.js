const express = require('express');
const controller = require('../controllers/investmentsController')
const router = express.Router();
const saleMiddle = require("../middlewares/saleMiddleware");
const purchaseMiddle = require('../middlewares/purchaseMiddleware');

/**
 * @swagger
 *  tags:
 *    name: Investments
 *    description: Endpoints de Investments
 */

router.post('/investments/purchase', purchaseMiddle, controller.addPurchaseAssets);
router.post('/investments/sale', saleMiddle, controller.addSaleAssets);

module.exports = router;