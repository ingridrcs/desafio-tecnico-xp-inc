const getCliente = require('../services/accountService')


// const addAccount = async (req: Request, res: Response):Promise<Response> => {
//   const account = await addAccountService(req.body);
//   // const token = generateJWTToken(user);
//   // if (token) {
//     return res.status(201).json( account );
//   // }
//   // return res.status(409).json({ message: 'User already exists' });
// };

const getCodCliente = async (req, res) => {
  const codCliente = Number(req.params.codCliente);
  console.log(codCliente);
  const cliente = await getCliente(codCliente);
  return res.status(201).json({cliente});
}
module.exports = getCodCliente;