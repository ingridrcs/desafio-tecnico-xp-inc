import express from 'express';
import 'express-async-errors';
import purchaseAssets from './routes/investmentsRoute';

const app = express();

app.use(express.json());
app.use('/', purchaseAssets)

export default app;