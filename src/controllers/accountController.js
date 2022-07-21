const service = require('../services/accountService');

const getCodCliente = async (req, res) => {
  const codCliente = req.params.codCliente;
  const cliente = await service.getCliente(codCliente);
  
  return res.status(201).json({ cliente });
}

const addWithdraw = async (req, res) => {
  const { codCliente, withdraw } = req.body;
  const withdrawCliente = await service.addWithdraw(codCliente, withdraw);

  if (withdrawCliente === null) {
    return res.status(404).json({ message: "Insuficient funds!" });
  }

  return res.status(201).json(withdrawCliente);
}

module.exports = { getCodCliente, addWithdraw };