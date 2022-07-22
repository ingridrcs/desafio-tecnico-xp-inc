const model = require('../models/assetsModel');
const purchaseMiddle = async (req, res, next) => {
  const { codAtivo, qtdeAtivo } = req.body;
const assets = await model.getByAssets(codAtivo);
if(qtdeAtivo >  assets.qtdeAtivo) {
  return res.status(400).json({message:"Purchase not effetued"});
}
next();
}

module.exports = purchaseMiddle;