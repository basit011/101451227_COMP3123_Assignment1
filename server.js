const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./utils/db");
const bcrypt = require('bcryptjs');
require('dotenv').config();

const employeesRoutes = require('./routes/emp/employees'); 
const userRoutes = require('./routes/user/user'); 

app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to My API!'); 
});

app.use('/api/v1/emp', employeesRoutes); 
app.use('/api/v1/user', userRoutes); 

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
});


