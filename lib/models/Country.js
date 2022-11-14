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

  static async getCountryById(id) {
    const { rows } = await pool.query(
      `         
SELECT countries.*
FROM countries
WHERE countries.id = $1
      `,
      [id]
    );
    if (!rows.length) {
      return null;
    }
    return new Country(rows[0]);
  }
};
