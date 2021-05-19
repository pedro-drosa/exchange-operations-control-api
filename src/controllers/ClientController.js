const Operation = require('../model/Operation');

module.exports = {
  async index(request, response) {
    const {name}  = request.body;

    const operations = await Operation.findAll({
      where: { name }
    });
    return response.json(operations);
  }
}