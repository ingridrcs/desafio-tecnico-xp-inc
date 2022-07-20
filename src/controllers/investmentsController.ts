import { Request, Response } from "express";
import add from "../services/investmentsServices";

const addItens = async (req:Request, res:Response) => {
  const { codAtivo, qtdeAtivo } = req.body;
const rows = await add(codAtivo, qtdeAtivo);
    return res.status(201).json(rows);
};

export default addItens;