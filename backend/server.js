const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const HTTP_PORT = 8000;

//tools for communicating with the database and getting info
app.use(cors());
app.use(bodyParser.json());

//this connects to our sqlite database
const dataBase = new sqlite3.Database('./database.db');

app.post('/api/register', (req, res, next) => {
    const { username, email, password } = req.body;

    //sql command to insert into a table, we use ? as a placeholder for data that we will pass from the frontend
    const command = 'INSERT INTO tblUsers (username, email, password) VALUES (?,?,?)';
    
    //tries to insert into the table on our database, if it returns a 400 or 500 code then we know that the username or email is taken / the databse itself had an error
    //201 code means the database registered the user successfully
    dataBase.run(command, [username, email, password], function (err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                res.status(400).json({ error: 'Username or email already exists' });
            }
            else {
                res.status(500).json({ message: 'Database error', details: err.message });
            }
        }
        else {
            res.status(201).json({ message: 'User registered successfully', userID: this.lastID });
        }
    })
})

app.listen(HTTP_PORT, () => {
    console.log('Server running on http://localhost:${HTTP_PORT}');
})