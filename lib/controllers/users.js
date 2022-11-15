const { Router } = require('express');
const User = require('../models/User.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const apps = await User.getUsers();
    res.json(apps);
  })
  .get('/:id', async (req, res, next) => {
    try {
      const app = await User.getUsersById(req.params.id);
      if (!app) {
        next();
      }
      res.json(app);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res) => {
    const newUser = await User.insert(req.body);
    res.json(newUser);
  });
