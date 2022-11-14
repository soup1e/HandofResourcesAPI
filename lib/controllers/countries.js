const { Router } = require('express');
const Country = require('../models/Country.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const countries = await Country.getCountries();
    res.json(countries);
  })
  .get('/:id', async (req, res, next) => {
    try {
      const country = await Country.getCountryById(req.params.id);
      if (!country) {
        next();
      }
      res.json(country);
    } catch (e) {
      next(e);
    }
  });
