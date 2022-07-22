const saleMiddle = async (req, res, next) => {
  const { QtdeAtivo, Valor } = req.body;

if(QtdeAtivo <= 0) {
  return res.status(400).json({message:"Inssuficient Assets to sell"});
}
if(Valor < 0) {
  return res.status(400).json({message:"Inssuficient Assets to sell"});
}
next();
}

module.exports = saleMiddle;