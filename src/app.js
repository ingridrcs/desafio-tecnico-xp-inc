const express = require('express');
require('express-async-errors');
const purchaseAssets = require('./routes/investmentsRoute');
const accountRoute = require('./routes/accountRoute');

const app = express();

app.use(express.json());
app.use('/', purchaseAssets);
app.use('/', accountRoute);

module.exports = app;