const express = require('express');
const router = express.Router();
const connectDB = require('../../utils/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../../models/usersModel');
const { check, validationResult } = require('express-validator');

connectDB(); 

// post method for user signup
router.post('/signup', async (req, res) => {
    const {  email, username, password } = req.body;

     // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new Users({
            email,
            username,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            // converting Id to string
            user_id: newUser._id.toString()
        });

    } catch (err) {
        console.error('Error during signup:', err); // Log the error
        res.status(500).json({ message: "Error checking for existing user or saving the new user", error: err.message });
    }
});

// post method for user login
router.post('/login', async (req, res) => {

   try{
        const {email, password}  = req.body

        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(404).json({ 
                success: false,
                message: "User not found" });
        }
       
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({
                success: false, 
                message: "Invalid password" });
        }
        res.status(200).json({
            success:true,
            message: "login successful", 
        });
    
    }catch(error){
        console.error('Error during login:', error);
        res.status(500).json({
            message: "An error occurred during login",
            message: error.message
        })
    }
});

// export the router for other files 
module.exports = router;

