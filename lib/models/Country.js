const pool = require('../utils/pool');

module.exports = class Country {
  id;
  country;
  currency;
  countrycode;
  currencycode;
  timezone;

  constructor(row) {
    this.id = row.id;
    this.country = row.country;
    this.currency = row.currency;
    this.countrycode = row.countrycode;
    this.currencycode = row.currencycode;
    this.timezone = row.timezone;
  }
  static async getCountries() {
    const { rows } = await pool.query('SELECT * from countries');
    return rows.map((row) => new Country(row));
  }
};
