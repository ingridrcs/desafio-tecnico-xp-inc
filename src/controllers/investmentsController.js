const add = require('../services/investmentsServices');


const addItens = async (req, res) => {
  const { codAtivo, qtdeAtivo } = req.body;
  const rows = await add(codAtivo, qtdeAtivo);
  return res.status(201).json(rows);
};

module.exports = addItens;