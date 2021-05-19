class Calculator {
  constructor(currencies) {
    this.currencies = currencies;
  }

  findCurrenciesAvailable(currencies) {
    return currencies.map((currency) => currency.name);
  }

  findPriceByName(name, currencies) {
    try {
      const [currency] = currencies.filter((currency) => {
        return currency.name === name;
      });

      return parseFloat(currency.price);
    } catch (err) {
      console.log(
        `Currency "${name}" not found 👻, check the data and try again.`
      );
    }
  }

  findCodeByName(name, currencies) {
    try {
      const [currency] = currencies.filter((currency) => {

        return currency.name === name;
      });

      return currency.code;
    } catch (err) {
      console.log(`Code "${name}" not found 👻, check the data and try again.`);
    }
  }

  convertValues(quantity, source, target) {
    try {
      const sourcePrice = this.findPriceByName(source, this.currencies);
      const targetPrice = this.findPriceByName(target, this.currencies);
      const code = this.findCodeByName(target, this.currencies);

      const result = (sourcePrice / targetPrice) * quantity;

      return result;
    } catch (error) {
      console.log('Oh no 🙈, an error occurred, check the data and try again');
    }
  }

  calculateRate(value, rate) {
    const exchangeRate = value * (rate / 100);
    return parseFloat(exchangeRate.toFixed(2));
  }

  addRate(value, rate) {
    const exchangeRate = value * (rate / 100);
    const valueWithRate = value + exchangeRate;
    
    return parseFloat(valueWithRate.toFixed(2));
  }
}

module.exports = Calculator;
