const express = require('express');
const router = express.Router();
const Employee = require('../../models/employeeModel'); 
const connectDB = require('../../utils/db');
const { check, validationResult } = require('express-validator');

connectDB();

router.post('/employees', async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Employee created successfully.',
            employee_id: newEmployee._id.toString()
        });

    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                message: 'Employee with this email already exists.'
            });
        } else {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
});

// get method for find employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find(); 
       
        res.status(200).json({
            success: true,
            employees: employees
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// get method to find Employee by Id
router.get('/employees/:eid', async (req, res) => {

    try{
        const employees = await Employee.findById(req.params.eid)

        if(!employees) {
            return res.status(404).json({message: `Employee with the id ${req.params.eid} doesn't exist`})
        }
       
        res.status(200).json({
            success:true,
            employees: employees
        })

    }catch(error){
        res.status(500).json({
            message: error.message
        })

    }
});

// put method to update employees detail
router.put('/employees/:eid', async (req, res) => {

    try{
        const deletedEmployees = await Employee.findByIdAndUpdate(req.params.eid, req.body, {new: true})

        if(!deletedEmployees) {
            return res.status(404).json({
                message: `Employee with the id ${req.params.eid} doesn't exist`})
        }
       
        res.status(200).json({
            success:true,
            message: "Employee details updated successfully.",
            // employees: employees
        })

    }catch(error){
        res.status(500).json({
            message: error.message
        })

    }
});

// delete method to remove employee 

router.delete('/employees/:eid', async (req, res) => {

    try{

        const employees = await Employee.findByIdAndDelete(req.params.eid)

        if(!employees) {
            return res.status(404).json({message: `Employee with the id ${req.params.eid} doesn't exist`})
        }
       
        res.status(200).json({
            success:true,
            message: "Employee deleted successfully.",
            employees: employees
            
        })

    }catch(error){
        res.status(500).json({
            message: error.message
        })

    }
});

module.exports = router;
