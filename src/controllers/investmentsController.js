const service = require('../services/investmentsService');


const addPurchaseAssets = async (req, res) => {
  const { codAtivo, qtdeAtivo, codCliente } = req.body;
  const rows = await service.addPurchase(codCliente, codAtivo, qtdeAtivo);

  if (rows === null) {
    return res.status(400).json({ message: "Purchase not effetued" });
  }

  return res.status(201).json(rows);
};

const addSaleAssets = async (req, res) => {
  const { codAtivo, qtdeAtivo, codCliente } = req.body;
  const rows = await service.addSale(codCliente, codAtivo, qtdeAtivo);

  if (rows === null) {
    return res.status(400).json({ message: "Purchase not effetued" });
  }

  return res.status(201).json(rows);
};

module.exports = { addPurchaseAssets, addSaleAssets };