import connection from "../db/connection";

const addPurchase = async (codAtivo, qtdeAtivo) => {
  const row = await connection.execute(
    'INSERT INTO TechBank.Investments (codAtivo, qtdeAtivo) VALUES (?, ?)', [codAtivo, qtdeAtivo]);
  return row;
}

export default addPurchase;