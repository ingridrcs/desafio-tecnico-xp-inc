const addPurchase = require('../models/investmentsModels');


const add = async (codAtivo, qtdeAtivo) => {
   const rows = await addPurchase(codAtivo, qtdeAtivo)
   return rows;
};

module.exports = add;