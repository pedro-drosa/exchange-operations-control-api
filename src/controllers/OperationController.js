const Yup = require('yup');
const { Op } = require("sequelize");

const Operation = require('../models/Operation');
const Currency = require('../models/Currency');

const Calculator = require('../shared/Calculator');

module.exports = {
  async index(request, response) {
    const { name, date } = request.query;
    const schemma = Yup.object().shape({
      name: Yup.string().min(3),
      date: Yup.date(),
    });

    if (!(await schemma.isValid(request.query))) {
      return response.status(400).json({ error: 'validation error, check the data and try again' });
    }

    if(name && date) {
      const operations = await Operation.findAll({
        where: {
          name,
          date,
        },
      });

      if (operations.length === 0) {
        return response.status(404).json({ message: 'Not found' });
      }

      return response.json(operations);
    }

    if (name || date) {
      const operations = await Operation.findAll({
        where: {
          [Op.or]: [
            {name: `${name}`},
            {date: `${date}`},
          ]
        },
      });

      if (operations.length === 0) {
        return response.status(404).json({ message: 'Not found' });
      }

      return response.json(operations);
    }

    const operations = await Operation.findAll();
    return response.json(operations);
  },

  async store(request, response) {
    const scheema = Yup.object().shape({
      name: Yup.string().min(3).required(),
      quantity: Yup.number().positive().required(),
      source: Yup.string().min(4).required(),
      target: Yup.string().min(4).required(),
    });

    if (!(await scheema.isValid(request.body))) {
      return response.status(400).json({
        error: 'validation error, check the data and try again',
      });
    }

    const { name, quantity, source, target } = request.body;

    const currencies = await Currency.findAll();

    const calculator = new Calculator(currencies);
    const exchange = calculator.convertValues(quantity, source, target);
    const standardRat = calculator.calculateRate(exchange, 10);
    const iof = calculator.calculateRate(exchange, 1.1);
    const total = exchange + standardRat + iof;

    const sourceExists = await Currency.findOne({
      where: { name: source },
    });

    const targetExists = await Currency.findOne({
      where: { name: target },
    });

    if (!sourceExists || !targetExists) {
      return response.status(400).json({
        error:
          'oh no 🙈, an error occurred while converting the values, check the data and try again',
      });
    }

    const operation = await Operation.create({
      name,
      quantity,
      source,
      target,
      exchange,
      total,
      iof,
      standardRat,
    });

    return response.json(operation);
  },
};
