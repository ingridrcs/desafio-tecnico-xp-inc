const modelPurchase = require('../models/investmentsModel');
const modelAssets = require('../models/assetsModel');

const addPurchase = async (codCliente, codAtivo, quantity) => {
   const [getTableAssets] = await modelAssets.getByAssets(codAtivo);
   const { QtdeAtivo, Valor } = getTableAssets;
   const qtdeAtivo = (QtdeAtivo - quantity);
   
   if(qtdeAtivo < 0) {
      return null;
   }
   await modelPurchase(codAtivo, qtdeAtivo, Valor);

   const purchase = {
      codCliente,
      codAtivo,
      qtdeAtivo,
   }
   
   return purchase;
};

module.exports = addPurchase;