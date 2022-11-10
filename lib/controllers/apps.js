const { Router } = require('express');
const AppDetail = require('../models/AppDetail.js');

module.exports = Router().get('/', async (req, res) => {
  const apps = await AppDetail.getApps();
  console.log(apps);
  res.json(apps);
});
