const pool = require('../utils/pool');

module.exports = class Car {
  constructor(row) {
    this.id = row.id;
    this.brand = row.brand;
    this.name = row.name;
    this.year = row.year;
  }

  static async getCars() {
    const { rows } = await pool.query('SELECT * from cars');
    return rows.map((appRow) => new Car(appRow));
  }
};
