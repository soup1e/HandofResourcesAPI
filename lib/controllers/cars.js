const { Router } = require('express');
const Car = require('../models/Car.js');

module.exports = Router().get('/', async (req, res) => {
  const cars = await Car.getCars();
  res.json(cars);
});
