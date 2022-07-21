const connection = require('../db/connection');

const getByAssets = async (CodAtivo) => {
  const [asset] = await connection.execute('SELECT * FROM TechBank.Assets WHERE CodAtivo = ?;', [CodAtivo]);
  return asset;
}

module.exports = getByAssets;