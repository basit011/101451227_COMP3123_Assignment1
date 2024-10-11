## 101451227_COMP3123_Assignment1
## Backend Application with Node.js, Express, and MongoDB

 This project is a backend application that implements RESTful API endpoints for user - and employee management using Express, node.Js, and MongoDB. This application allows - users to create accounts, log in, and perform various CRUD operations on employee - records.

## User management 
   - Sign up for new accounts with unique emails, username and password.
   - Log in using either email along with a password ( Hashed password for security ).
   

##  Employee Management
  - Create new employee records with details such as name, email, position, salary, and - department.
  - Retrieve a list of all employees.
  - Get specific employee details by employee ID.
  - Update employee information as needed using employee ID.
  - Delete employee records by employee ID.

##  Database management
  - MongoDB database is used to store User and Employee information.
  - User data includes username, email, hashed password, and timestamps for account
  - creation and updates.
  - Employee data includes first name, last name, email, position, salary, department,
  - and timestamps for record creation and updates.


## Prerequisites
   Before running the application, make sure you have the following on your system.
  - Node.js
  - MongoDB 
  - Express.js – Can be installed using command npm install express 
  - Mongoose – Used for MongoDB, can be Install using command npm install mongoose
  - MongoDB Compass - Recommended for database management and viewing data easily.
  - Postman – Recommended for testing API endpoints.
