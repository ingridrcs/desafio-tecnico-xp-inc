const modelInvestments = require('../models/investmentsModel');
const modelAssets = require('../models/assetsModel');

const addPurchase = async (codCliente, codAtivo, quantity) => {
   const [getTableAssets] = await modelAssets.getByAssets(codAtivo);
   const { QtdeAtivo, Valor } = getTableAssets;
   const qtdeAtivo = (QtdeAtivo - quantity);

   if (qtdeAtivo < 0) {
      return null;
   }

   await modelInvestments.addPurchaseAssets(codAtivo, qtdeAtivo, Valor);
   
   const [getClient] = await modelAssets.getAllByClients(codCliente);

   const verifyAsset = await getClient.some((asset) => codAtivo === asset.CodAtivo);
   if (verifyAsset === false) {
      const addAssets = await modelInvestments.addAsset(codCliente, codAtivo, quantity, Valor);
      return addAssets;
   }

   const [getAsset] = await getClient.filter((asset) => codAtivo === asset.CodAtivo)
      .map((asset) => {
         const totalAssets = asset.QtdeAtivo + quantity;
         const totalValue = Number((quantity * Valor)) + Number(asset.Valor);
         return {
            cliente: asset.CodCliente,
            ativo: asset.CodAtivo,
            quantidade: totalAssets,
            valor: totalValue,
         }
      });

   const { cliente, ativo, quantidade, valor } = getAsset;

   await modelInvestments.updateAssetsClients(cliente, ativo, quantidade, valor);

   const purchase = {
      codCliente,
      codAtivo,
      qtdeAtivo,
   }

   return purchase;
};

const addSale = async (codCliente, codAtivo, quantity) => {
   const [getClient] = await modelAssets.getAllByClients(codCliente);
   const [getTableAssets] = await modelAssets.getByAssets(codAtivo);
   const { QtdeAtivo, Valor } = getTableAssets;
   const [getAsset] = await getClient.filter((asset) => codAtivo === asset.CodAtivo)
      .map((asset) => {

         if (quantity > asset.QtdeAtivo) {
            return null;
         }
         const totalAssets = asset.QtdeAtivo - quantity;
         const totalValue = Number(asset.Valor) - Number((quantity * Valor));

         return {
            cliente: asset.CodCliente,
            ativo: asset.CodAtivo,
            quantidade: totalAssets,
            valor: totalValue,
         }
      });

   if (getAsset === null) {
      return null;
   }

   const { cliente, ativo, quantidade, valor } = getAsset;
   await modelInvestments.updateAssetsClients(cliente, ativo, quantidade, valor);

   const saleCLient = {
      codCliente: cliente,
      codAtivo: ativo,
      qtdeAtivo: quantidade,
   }

   const qtdeAtivo = (QtdeAtivo + quantity);
   await modelInvestments.addPurchaseAssets(codAtivo, qtdeAtivo, Valor);

   return saleCLient;
};
module.exports = { addPurchase, addSale };