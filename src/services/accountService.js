const getCodCliente = require('../models/accountModel');


// const addAccountService = async (account:IAccount):Promise<IAccount> => {
//   const newUser = await addAccount(account);
//   console.log('service', newUser);
//   const { insertId } = newUser;
//   return { codCliente: insertId, ...account };
// };

const getCliente = async (codCliente)=> {
  const cliente= await getCodCliente(codCliente);
  return cliente;
}
module.exports =  getCliente;