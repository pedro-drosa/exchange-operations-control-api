const { Router } = require('express');

const currenciesRouter = Router();

const currencyController = require('../controllers/CurrencyController');

currenciesRouter.get('/currencies', currencyController.index);
currenciesRouter.get('/currencies/:id', currencyController.index);
currenciesRouter.post('/currencies', currencyController.store);
currenciesRouter.put('/currencies/:id', currencyController.update);
currenciesRouter.delete('/currencies/:id', currencyController.delete);

module.exports = currenciesRouter;
