const model = require('../models/accountModel');

const getCliente = async (codCliente) => {
  const cliente = await model.getCodCliente(codCliente);
  return cliente;
}

const addWithdraw = async (codCliente, withdraw) => {
  const [getCliente] = await model.getCodCliente(codCliente);
  const { saldo } = getCliente;

  if (withdraw > saldo) {
    return null;
  }

  const saldoFinal = saldo - withdraw;
  await model.update(codCliente, saldoFinal);

  const finalWithdraw = {
    codCliente,
    saldoFinal,
  }

  return finalWithdraw;
}

module.exports = { getCliente, addWithdraw };