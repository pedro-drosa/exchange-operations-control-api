const {Router} = require('express');

const currenciesRouter = require('../../../../routes/currencies.routes');
const operationsRouter = require('../../../../routes/operations.routes');
const clientsRouter = require('../../../../routes/clients.routes');

const routes = Router();

routes.use(currenciesRouter);
routes.use(operationsRouter);
routes.use(clientsRouter);

module.exports = routes;