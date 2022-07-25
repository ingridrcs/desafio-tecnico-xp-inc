const connection = require('../db/connection');

const getByAssets = async (CodAtivo) => {
  const [asset] = await connection.execute('SELECT * FROM TechBank.Assets WHERE CodAtivo = ?;', [CodAtivo]);
  console.log('model',asset);
  return asset;
}

const getAllByClients = async (CodCliente) => {
  const allAssets = await connection.execute('SELECT * FROM TechBank.AssetsClient WHERE CodCliente = ?;', [CodCliente]);
  return allAssets;
}

module.exports = { getByAssets, getAllByClients };