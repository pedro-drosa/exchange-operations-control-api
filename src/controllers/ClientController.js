const Operation = require('../model/Operation');
const {parseISO} = require('date-fns');

module.exports = {
  async index(request, response) {
    const {name, date}  = request.body;

    if(name && date) {
      const parsedDate = parseISO(date);
    
      const operations = await Operation.findAll({
        where: { name, createdAt: parsedDate }
      });

      return response.json({operations});
    }

    const operations = await Operation.findAll({
      where: { name}
    });

    return response.json({operations});
  }
}