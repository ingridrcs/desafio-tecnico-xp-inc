const withdrawMiddle = (req, res, next) => {
  const { codCliente, withdraw } = req.body;
  if(!codCliente) {
    return res.status(400).json({message:"Cliente não encontrado"});
  }
  if(withdraw <= 0) {
    return res.status(400).json({message:" Saque não autorizado"});
  }
next();
}

module.exports = withdrawMiddle;