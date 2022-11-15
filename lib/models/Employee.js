const pool = require('../utils/pool');

module.exports = class Employee {
  id;
  name;
  first;
  gender;
  job;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.first = row.first;
    this.gender = row.gender;
    this.job = row.job;
  }

  static async getEmployees() {
    const { rows } = await pool.query('SELECT * from employees');
    return rows.map((row) => new Employee(row));
  }

  static async getEmployeesById(id) {
    const { rows } = await pool.query(
      `         
SELECT employees.*
FROM employees
WHERE employees.id = $1
      `,
      [id]
    );
    if (!rows.length) {
      return null;
    }
    return new Employee(rows[0]);
  }

  static async insert({ name, first, gender, job }) {
    const { rows } = await pool.query(
      `
      INSERT INTO employees 
        (name,
        first,
        gender,
        job)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [name, first, gender, job]
    );
    return new Employee(rows[0]);
  }
};
