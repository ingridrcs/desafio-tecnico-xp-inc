const service = require('../services/assetsService');

const getByAssets = async (req, res) => {
  const codByAsset = req.params.CodAtivo;
  const [asset] = await service(codByAsset);
  
  return res.status(201).json(asset);
}

module.exports = getByAssets;