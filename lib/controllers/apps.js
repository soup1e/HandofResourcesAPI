const { Router } = require('express');
const AppDetail = require('../models/AppDetail.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const apps = await AppDetail.getApps();
    res.json(apps);
  })
  .get('/:id', async (req, res, next) => {
    try {
      const app = await AppDetail.getAppById(req.params.id);
      if (!app) {
        next();
      }
      res.json(app);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res) => {
    const newapp = await AppDetail.insertApp(req.body);
    res.json(newapp);
  })
  .put('/:id', async (req, res) => {
    const update = await AppDetail.update(req.params.id, req.body);
    res.json(update);
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await AppDetail.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
