// import { ResultSetHeader } from 'mysql2';
// import { ResultSetHeader } from 'mysql2';
const connection = require('../db/connection');
//import { IAccount } from '../interfaces/clientAccount';

// const addAccount = async (account:IAccount):Promise<ResultSetHeader> => {
//   const [row] = await connection.execute<ResultSetHeader>('INSERT INTO TechBank.Accounts (saldo) VALUES (?)', [account.saldo]);
//   return row;
// };

const getCodCliente = async (codCliente) => {
const [client] = await connection.execute('SELECT * FROM TechBank.Accounts WHERE codCliente = ?;', [codCliente]);
console.log(client);
return client;
}
const update = async (codCliente, saldo) => {
  const [client] = await connection.execute(
    'UPDATE TechBank.Accounts SET saldo = ? WHERE codCliente = ?', [saldo, codCliente]);
  return client;
}
module.exports = { getCodCliente, update };