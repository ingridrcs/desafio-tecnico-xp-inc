const withdrawMiddle = (req, res, next) => {
  const { codCliente, saldo } = req.body;
  if(!codCliente) {
    return res.status(400).json({message:"Cliente não encontrado"});
  }
  if(saldo <= 0) {
    return res.status(400).json({message:" Saque não autorizado"});
  }
next();
}
module.exports = withdrawMiddle;