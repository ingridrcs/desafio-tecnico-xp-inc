import express from 'express';
import addItens from '../controllers/investmentsController';
const router = express.Router();

router.post('/investments/purchase', addItens);

export default router;