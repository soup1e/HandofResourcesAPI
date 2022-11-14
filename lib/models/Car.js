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

  static async getCarById(id) {
    const { rows } = await pool.query(
      `         
SELECT cars.*
FROM cars
WHERE cars.id = $1
      `,
      [id]
    );
    return new Car(rows[0]);
  }
};
