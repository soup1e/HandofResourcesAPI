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
};
