import addPurchase from "../models/investmentsModels";

const add = async (codAtivo:number, qtdeAtivo:number) => {
   const rows = await addPurchase(codAtivo, qtdeAtivo)
   console.log('service', rows);
};

export default add;