const {Router} = require('express');

const clientsRouter = Router();

const clientController = require('../controllers/ClientController');

clientsRouter.get('/clients', clientController.index);

module.exports = clientsRouter;