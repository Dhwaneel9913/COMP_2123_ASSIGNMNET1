const express = require('express');
const { getAllEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

const router = express.Router();

router.get('/employees', getAllEmployees);
router.post('/employees', createEmployee);
router.get('/employees/:eid', getEmployeeById);  // Import getEmployeeById here
router.put('/employees/:eid', updateEmployee);
router.delete('/employees', deleteEmployee);

module.exports = router;
