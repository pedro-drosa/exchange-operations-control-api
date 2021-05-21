const Currency = require('../models/Currency');
const Yup = require('yup');

module.exports = {
  async index(request, response) {
    const { id } = request.params;

    const schemma = Yup.object().shape({
      id: Yup.number().min(1),
    });

    if (!(await schemma.isValid(request.params))) {
      return response
        .status(400)
        .json({ error: 'validation error, check the data and try again' });
    }

    if (id) {
      const currency = await Currency.findByPk(id);
      if (!currency) {
        return response.status(404).json({ mesage: 'currency not found' });
      }
      return response.json(currency);
    }

    const currencies = await Currency.findAll();
    return response.json(currencies);
  },

  async store(request, response) {
    const schema = Yup.object().shape({
      code: Yup.string().required().min(3),
      name: Yup.string().required().min(4),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'validation error, check the data and try again' });
    }

    const { code, name, price } = request.body;

    const currencyExists = await Currency.findOne({
      where: { code },
    });

    if (currencyExists) {
      return response.status(400).json({ erro: 'currency alread exists' });
    }

    const currency = await Currency.create({ code, name, price });

    return response.json(currency);
  },

  async update(request, response) {
    const { id } = request.params;
    const { price } = request.body;

    const schemma = Yup.object().shape({
      price: Yup.number().positive().required(),
    });

    if (!(await schemma.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'validation error, check the data and try again' });
    }

    const currency = await Currency.findByPk(id);

    if (!currency) {
      return response.status(404).json({ error: 'currency not found' });
    }

    await Currency.update({ price }, { where: { id: currency.id } });

    const newValue = await Currency.findByPk(id);

    return response.json(newValue);
  },

  async delete(request, response) {
    const { id } = request.params;

    await Currency.destroy({
      where: { id },
    });

    return response.response.send();
  },
};
