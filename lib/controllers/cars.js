const { Router } = require('express');
const Car = require('../models/Car.js');

module.exports = Router()
  .put('/:id', async (req, res) => {
    const update = await Car.updateCar(req.params.id, req.body);
    res.json(update);
  })
  .get('/', async (req, res) => {
    const cars = await Car.getCars();
    res.json(cars);
  })
  .get('/:id', async (req, res, next) => {
    try {
      const singleCar = await Car.getCarById(req.params.id);
      if (!singleCar) {
        next();
      }
      res.json(singleCar);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res) => {
    const newCar = await Car.insertCar(req.body);
    res.json(newCar);
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Car.deleteCar(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
