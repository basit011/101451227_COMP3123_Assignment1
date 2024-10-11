const mongoose = require('mongoose');

// employee schema
const employeeSchema = new mongoose.Schema({
    "first_name": {
        type: String,
        required: true
    },
    "last_name": {
        type: String,
        required: true
    },

     "email": {
        type: String,
        required: true,
        unique: true
    },

    "position": {
        type: String,
        required: true
    },

    "salary": {
        type: Number,
        required: true,
        min:0
    },

    "date_of_joining": {
        type: Date,
        required: true
    },

    "department": {
        type: String,
        required: true
    },

     "created_at": {
        type: Date,
        default: Date.now
    },

    "updated_at": {
        type: Date,
        default: Date.now
    }
}, { timestamps: true }); 


const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;   

