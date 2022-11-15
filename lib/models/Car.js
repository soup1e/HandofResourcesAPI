const pool = require('../utils/pool');

module.exports = class Car {
  id;
  brand;
  name;
  year;

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
    if (!rows.length) {
      return null;
    }
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

  static async updateCar(id, items) {
    const carUpdate = await Car.getCarById(id);
    const updatedData = { ...carUpdate, ...items };

    const { rows } = await pool.query(
      `
      UPDATE
        cars
      SET
        brand = $2,
        name = $3,
        year = $4
      WHERE
        id = $1
      RETURNING
        *;
      `,
      [id, updatedData.brand, updatedData.name, updatedData.year]
    );
    return new Car(rows[0]);
  }

  static async deleteCar(id) {
    const { rows } = await pool.query(
      `DELETE 
        FROM cars 
      WHERE
        id = $1
      RETURNING *;
      `,
      [id]
    );
    return new Car(rows[0]);
  }
};
