const { Router } = require('express');

const rootsRouter = require('../../../../routes/roots.routes');
const currenciesRouter = require('../../../../routes/currencies.routes');
const operationsRouter = require('../../../../routes/operations.routes');

const routes = Router();

routes.use(rootsRouter);
routes.use(currenciesRouter);
routes.use(operationsRouter);

module.exports = routes;
