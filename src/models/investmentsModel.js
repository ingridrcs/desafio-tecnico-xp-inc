const connection = require('../db/connection');

const addPurchaseAssets = async (codAtivo, qtdeAtivo, valor) => {
  const [withdraw] = await connection.execute(
    'UPDATE TechBank.Assets SET QtdeAtivo = ? WHERE CodAtivo = ? AND Valor = ?;', [qtdeAtivo, codAtivo, valor]);
    return withdraw;
}



module.exports = addPurchaseAssets;