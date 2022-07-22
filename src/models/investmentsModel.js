const connection = require('../db/connection');

const addPurchaseAssets = async (codAtivo, qtdeAtivo, valor) => {
  const [withdraw] = await connection.execute(
    'UPDATE TechBank.Assets SET QtdeAtivo = ? WHERE CodAtivo = ? AND Valor = ?;', [qtdeAtivo, codAtivo, valor]);
    return withdraw;
}

const updateAssetsClients = async (codCliente, codAtivo, qtdeAtivo, valor) => {
  const [purchase] = await connection
  .execute(
    'UPDATE TechBank.AssetsClient SET QtdeAtivo = ?, Valor = ? WHERE CodCliente = ? AND CodAtivo = ?', [qtdeAtivo, valor, codCliente, codAtivo]);
  return purchase;
}

module.exports = { addPurchaseAssets, updateAssetsClients };