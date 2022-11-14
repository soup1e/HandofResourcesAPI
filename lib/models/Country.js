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

  static async update(id, items) {
    const update = await Country.getCountryById(id);
    const updatedData = { ...update, ...items };

    const { rows } = await pool.query(
      `
      UPDATE
        countries
      SET
        country = $2,
        currency = $3,
        countrycode = $4,
        currencycode = $5,
        timezone = $6
      WHERE
        id = $1
      RETURNING
        *;
      `,
      [
        id,
        updatedData.country,
        updatedData.currency,
        updatedData.countrycode,
        updatedData.currencycode,
        updatedData.timezone,
      ]
    );
    return new Country(rows[0]);
  }

  static async insert({
    country,
    currency,
    countrycode,
    currencycode,
    timezone,
  }) {
    const { rows } = await pool.query(
      `
      INSERT INTO countries (country, currency, countrycode, currencycode, timezone)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [country, currency, countrycode, currencycode, timezone]
    );
    return new Country(rows[0]);
  }
};
