const { Router } = require('express');
const Car = require('../models/Car.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const cars = await Car.getCars();
    res.json(cars);
  })
  .get('/:id', async (req, res) => {
    const singleCar = await Car.getCarById(req.params.id);
    res.json(singleCar);
  });
