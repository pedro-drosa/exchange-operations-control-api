const { Router } = require('express');

const operationsRouter = Router();

const operationController = require('../controllers/OperationController');

operationsRouter.get('/operations', operationController.index);
operationsRouter.post('/operations', operationController.store);

module.exports = operationsRouter;
