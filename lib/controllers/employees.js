const { Router } = require('express');
const Employee = require('../models/Employee.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const employees = await Employee.getEmployees();
    res.json(employees);
  })

  .get('/:id', async (req, res, next) => {
    try {
      const employee = await Employee.getEmployeesById(req.params.id);
      if (!employee) {
        next();
      }
      res.json(employee);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res) => {
    const newEmployee = await Employee.insert(req.body);
    res.json(newEmployee);
  });
