const model = require('../models/assetsModel');

const getByAssets = async (CodAtivo) => {
  const asset = await model(CodAtivo);
  return asset;
}

module.exports = getByAssets;