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
    return rows.map((carRow) => new Car(carRow));
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

  static async insertCar({ brand, name, year }) {
    const { rows } = await pool.query(
      `
      INSERT INTO cars (brand, name, year)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [brand, name, year]
    );
    return new Car(rows[0]);
  }
};
