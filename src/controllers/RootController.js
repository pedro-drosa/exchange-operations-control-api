module.exports = {
  async index(request, response) {
    return response.json({
      currencies: 'http://localhost:3333/currencies',
      operations: 'http://localhost:3333/operations',
    });
  },
};
