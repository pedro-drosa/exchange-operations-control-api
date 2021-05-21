const { Router } = require('express');

const currenciesRouter = require('../../../../routes/currencies.routes');
const operationsRouter = require('../../../../routes/operations.routes');

const routes = Router();

routes.use(currenciesRouter);
routes.use(operationsRouter);

module.exports = routes;
