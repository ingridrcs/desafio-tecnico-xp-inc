const model = require('../models/assetsModel');

const getByAssets = async (CodAtivo) => {
  const asset = await model.getByAssets(CodAtivo);
  console.log(asset);
  return asset;
}

const getByClients = async (CodCliente) => {
  const asset = await model.getAllByClients(CodCliente);
  return asset;
}

module.exports = { getByAssets, getByClients };