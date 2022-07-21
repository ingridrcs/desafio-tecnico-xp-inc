const depositMiddle = (req, res, next) => {
  const { codCliente, deposit } = req.body;
  if(!codCliente) {
    return res.status(400).json({message:"Client not found"});
  }
  if(deposit <= 0) {
    return res.status(400).json({message:" Deposit not autorized"});
  }
next();
}

module.exports = depositMiddle;