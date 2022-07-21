const express = require('express');
require('express-async-errors');
const purchaseAssets = require('./routes/investmentsRoute');
const accountRoute = require('./routes/accountRoute');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use('/', purchaseAssets);
app.use('/', accountRoute);
app.use(errorMiddleware);

module.exports = app;