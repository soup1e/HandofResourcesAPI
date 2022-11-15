const pool = require('../utils/pool');

module.exports = class User {
  constructor(row) {
    this.id = row.id;
    this.email = row.email;
    this.username = row.username;
    this.password = row.password;
    this.ip = row.ip;
  }

  static async getUsers() {
    const { rows } = await pool.query('SELECT * from users');
    return rows.map((appRow) => new User(appRow));
  }

  static async getUsersById(id) {
    const { rows } = await pool.query(
      `         
SELECT users.*
FROM users
WHERE users.id = $1
      `,
      [id]
    );
    if (!rows.length) {
      return null;
    }
    return new User(rows[0]);
  }

  static async insert({ email, username, password, ip }) {
    const { rows } = await pool.query(
      `
      INSERT INTO users (email, username, password, ip)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [email, username, password, ip]
    );
    return new User(rows[0]);
  }
};
