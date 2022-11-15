const { Router } = require('express');
const Employee = require('../models/Employee.js');

module.exports = Router().get('/', async (req, res) => {
  const employees = await Employee.getEmployees();
  res.json(employees);
});
