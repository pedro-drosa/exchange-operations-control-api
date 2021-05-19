const Operation = require('../models/Operation');
const Currency = require('../models/Currency');

const Calculator = require('../shared/Calculator');

module.exports = {
  async index(request, response) {
    const operations = await Operation.findAll();
    return response.json(operations);
  },

  async store(request, response) {
    const { name, quantity, source, target } = request.body;

    const currencies = await Currency.findAll();
    
    const calculator = new Calculator(currencies);
    const exchange = calculator.convertValues(quantity, source, target);
    const standardRat = calculator.calculateRate(exchange, 10);
    const iof = calculator.calculateRate(exchange, 1.1); 
    const total = exchange + standardRat + iof;

    const sourceExists = await Currency.findOne({
      where: {name: source}
    });

    const targetExists = await Currency.findOne({
      where: {name: target}
    });

    if(!sourceExists || !targetExists) {
      return response.status(400).json({error: 'Oh no 🙈, an error occurred, check the data and try again'});
    }

    const operation = await Operation.create({ 
      name,
      quantity,
      source, 
      target,
      exchange,
      total,
      iof,
      standardRat
    });
    
    return response.json(operation);
  }
}