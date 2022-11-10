const pool = require('../utils/pool');

module.exports = class AppDetail {
  constructor(row) {
    this.id = row.id;
    this.app = row.app;
    this.version = row.version;
    this.bundleid = row.bundleid;
    this.filename = row.filename;
  }

  //get
  static async getApps() {
    const { rows } = await pool.query('SELECT * from apps');
    return rows.map((appRow) => new AppDetail(appRow));
  }

  static async getAppById(id) {
    const { rows } = await pool.query(
      `         
SELECT apps.*
FROM apps
WHERE apps.id = $1
      `,
      [id]
    );
    return new AppDetail(rows[0]);
  }
};
