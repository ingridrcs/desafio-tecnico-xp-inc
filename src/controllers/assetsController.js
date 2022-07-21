const service = require('../services/assetsService');

const getByAssets = async (req, res) => {
  const codByAsset = req.params.CodAtivo;
  const [asset] = await service.getByAssets(codByAsset);
  
  return res.status(201).json(asset);
}

const getByClients = async (req, res) => {
  const assetsClient = req.params.CodCliente;
  const [allAssets] = await service.getByClients(assetsClient);
  
  return res.status(201).json(allAssets);
}

module.exports = { getByAssets, getByClients };