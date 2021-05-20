const { Router } = require('express');

const clientsRouter = Router();

const clientController = require('../controllers/ClientController');

clientsRouter.post('/clients', clientController.index);

module.exports = clientsRouter;
