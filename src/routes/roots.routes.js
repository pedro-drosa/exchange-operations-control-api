const { Router } = require('express');

const rootsRouter = Router();

const rootController = require('../controllers/RootController');

rootsRouter.get('/', rootController.index);

module.exports = rootsRouter;
