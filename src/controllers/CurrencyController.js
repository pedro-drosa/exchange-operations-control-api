const Currency = require('../model/Currency');

module.exports = {
  async index(request, response) {
    const currencies = await Currency.findAll();
    return response.json(currencies);
  },

  async store(request, response) {
    const { code, name, price } = request.body;
    
    const currencyExists = await Currency.findOne({
      where: { code }
    });

    if (currencyExists) {
      return response.status(400).json({erro: 'currency alread exists'});
    }

    const currency = await Currency.create({code, name, price});

    return response.json(currency);
  },

  async update(request, response) {
    const { id } = request.params;
    const { price } = request.body;
    
    const currency = await Currency.findByPk(id);

    if (!currency) {
      return response.status(400).json({error: 'currency not found'})
    }
    
    await Currency.update({ price }, { where: {id: currency.id} })

    return response.json({price: price.toFixed(2)});
  }
}