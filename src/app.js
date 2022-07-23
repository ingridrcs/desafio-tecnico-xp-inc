const express = require('express');
require('express-async-errors');
const investmentsRoute = require('./routes/investmentsRoute');
const accountRoute = require('./routes/accountRoute');
const errorMiddleware = require('./middlewares/error');
const assetsRoute = require('./routes/assetsRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();

app.use(express.json());
app.use('/', investmentsRoute);
app.use('/', accountRoute);
app.use('/', assetsRoute);
app.use('/', loginRoute);
app.use(errorMiddleware);

module.exports = app;