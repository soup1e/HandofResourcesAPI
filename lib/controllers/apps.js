const { Router } = require('express');
const AppDetail = require('../models/AppDetail.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const apps = await AppDetail.getApps();
    res.json(apps);
  })
  .get('/:id', async (req, res) => {
    const app = await AppDetail.getAppById(req.params.id);
    res.json(app);
  })
  .post('/', async (req, res) => {
    const newapp = await AppDetail.insertApp(req.body);
    res.json(newapp);
  });
