const service = require('../services/accountService');


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
  const cliente = await service.getCliente(codCliente);
  return res.status(201).json({ cliente });
}

const addWithdraw = async (req, res) => {
  const withdraw = await service.addWithdraw(req.body);
  console.log('controller', withdraw);
  if (withdraw === null) {
    return res.status(404).json({ message: "Insuficient funds!" });
  }
  return res.status(201).json({ withdraw });
}
module.exports = { getCodCliente, addWithdraw };