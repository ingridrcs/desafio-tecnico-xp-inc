const depositMiddle = (req, res, next) => {
  const { codCliente, deposit } = req.body;
  if(!codCliente) {
    return res.status(400).json({message:"Cliente não encontrado"});
  }
  if(deposit <= 0) {
    return res.status(400).json({message:" Depósito não autorizado"});
  }
next();
}

module.exports = depositMiddle;