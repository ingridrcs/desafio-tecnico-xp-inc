const purchaseMiddle = async (req, res, next) => {
  const { codAtivo, qtdeAtivo } = req.body;

if(!qtdeAtivo) {
  return res.status(400).json({message:"Purchase not effetued"});
}
if(!codAtivo) {
  return res.status(400).json({message:"Purchase not effetued"});
}
next();
}

module.exports = purchaseMiddle;