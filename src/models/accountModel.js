const connection = require('../db/connection');

const getCodCliente = async (codCliente) => {
  const [client] = await connection.execute('SELECT * FROM TechBank.Accounts WHERE codCliente = ?;', [codCliente]);
  return client;
}

const update = async (codCliente, saldoFinal) => {
  const [withdraw] = await connection.execute(
    'UPDATE TechBank.Accounts SET saldo = ? WHERE codCliente = ?', [saldoFinal, codCliente]);
  return withdraw;
}

module.exports = { getCodCliente, update };