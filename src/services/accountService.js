const model = require('../models/accountModel');


// const addAccountService = async (account:IAccount):Promise<IAccount> => {
//   const newUser = await addAccount(account);
//   console.log('service', newUser);
//   const { insertId } = newUser;
//   return { codCliente: insertId, ...account };
// };

const getCliente = async (codCliente) => {
  const cliente = await model.getCodCliente(codCliente);
  return cliente;
}

const addWithdraw = async (codCliente, withdraw) => {
  const getCliente = await model.getCodCliente(codCliente);
  const { saldo } = getCliente;

  if (withdraw > saldo) {
    return null;
  }
  const saldofinal = saldo - withdraw;
  const update = await model.update(codCliente, saldofinal);
  console.log(update);
  return update;
}
module.exports = { getCliente, addWithdraw };