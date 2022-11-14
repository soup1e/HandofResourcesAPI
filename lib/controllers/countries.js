const { Router } = require('express');
const Country = require('../models/Country.js');

module.exports = Router().get('/', async (req, res) => {
  const countries = await Country.getCountries();
  res.json(countries);
});
