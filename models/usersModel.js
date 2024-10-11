const mongoose = require('mongoose');
// const { Schema } = mongoose; 

const usersSchema = new mongoose.Schema({

    "username": {
        type: String,
        required: true,
        unique: true
    },
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
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
},  { timestamps: true }); 

const Users = mongoose.model('Users', usersSchema);
module.exports = Users;

