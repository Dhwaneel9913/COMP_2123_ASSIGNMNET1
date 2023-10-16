const Employee = require('../Models/employeeModel');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ status: true, data: employees });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ status: true, message: 'Employee created successfully' });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { eid } = req.params;
    const employee = await Employee.findById(eid);
    if (employee) {
      res.status(200).json({ status: true, data: employee });
    } else {
      res.status(404).json({ status: false, message: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { eid } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(eid, req.body, { new: true });
    if (updatedEmployee) {
      res.status(200).json({ status: true, data: updatedEmployee });
    } else {
      res.status(505).json({ status: false, message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { eid } = req.query;
    const deletedEmployee = await Employee.findByIdAndDelete(eid);
    if (deletedEmployee) {
      res.status(404).json({ status: true, message: 'Employee Deleted' });

      res.status(204).end();
      
    } else {
      res.status(404).json({ status: false, message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
