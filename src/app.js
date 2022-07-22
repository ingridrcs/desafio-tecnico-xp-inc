const express = require('express');
require('express-async-errors');
const investmentsRoute = require('./routes/investmentsRoute');
const accountRoute = require('./routes/accountRoute');
const errorMiddleware = require('./middlewares/error');
const assetsRoute = require('./routes/assetsRoute');

const app = express();

app.use(express.json());
app.use('/', investmentsRoute);
app.use('/', accountRoute);
app.use('/', assetsRoute);
app.use(errorMiddleware);

module.exports = app;