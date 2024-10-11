const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./utils/db");
const bcrypt = require('bcryptjs');

const employeesRoutes = require('./routes/emp/employees'); // Import employee routes
const userRoutes = require('./routes/user/user'); // Import user routes

app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

app.use('/api/v1/emp', employeesRoutes); 
app.use('/api/v1/user', userRoutes); 

const SERVER_PORT = 3000;

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
});


