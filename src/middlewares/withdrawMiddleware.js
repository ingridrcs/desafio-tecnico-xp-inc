const withdrawMiddle = (req, res, next) => {
  const { codCliente, withdraw } = req.body;
  if(!codCliente) {
    return res.status(400).json({message:"Client not found"});
  }
  if(withdraw <= 0) {
    return res.status(400).json({message:" Withdraw not autorized"});
  }
next();
}

module.exports = withdrawMiddle;