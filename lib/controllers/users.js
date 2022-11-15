const { Router } = require('express');
const User = require('../models/User.js');

module.exports = Router().get('/', async (req, res) => {
  const apps = await User.getUsers();
  res.json(apps);
});
