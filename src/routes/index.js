const express = require('express');
const routes = express.Router();

const operationController = require('../controllers/OperationController');
const clientController = require('../controllers/ClientController');
const currencyController = require('../controllers/CurrencyController');

//operações
routes.get('/operations', operationController.index);
routes.post('/operations', operationController.store);

//clientes
routes.get('/clients', clientController.index);

//moedas
routes.get('/currencies', currencyController.index);
routes.post('/currencies', currencyController.store);
routes.put('/currencies/:id', currencyController.update);


module.exports = routes;