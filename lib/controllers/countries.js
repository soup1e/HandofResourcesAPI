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
  })
  .put('/:id', async (req, res) => {
    const update = await Country.update(req.params.id, req.body);
    res.json(update);
  })
  .post('/', async (req, res) => {
    const newCountry = await Country.insert(req.body);
    res.json(newCountry);
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Country.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
