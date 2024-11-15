const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const HTTP_PORT = 8000; //port that our app is listening on

//remains the same for all users, used to sign and verify all JWT tokens
const Key = process.env.SECRET_KEY;

//tools for communicating with the database and getting info
app.use(cors());
app.use(bodyParser.json());

//this connects to our sqlite database
const dataBase = new sqlite3.Database('./database.db');

app.post('/api/register', (req, res, next) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    //sql command to insert into a table, we use ? as a placeholder for data that we will pass from the frontend
    const command = 'INSERT INTO tblUsers (username, email, password) VALUES (?,?,?)';
    
    //tries to insert into the table on our database, if it returns a 400 or 500 code then we know that the username or email is taken / the databse itself had an error
    //201 code means the database registered the user successfully
    dataBase.run(command, [username, email, hashedPassword], function (err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                res.status(400).json({ error: 'Username or email already exists' });
            }
            else {
                res.status(500).json({ message: 'Database error', details: err.message });
            }
        }
        else {
            //generates a jwt token with user data
            const token = jqt.sign({ userId: this.lastID, username }, connectionDetails.env.SECRET_KEY, {
                expiresIn: '6h' //token expires in 6 hours
            })
            res.status(201).json({ message: 'User registered successfully', userID: this.lastID });
        }
    })
    dataBase.close();
});

//authenticate JWT for protected routes
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
}

app.listen(HTTP_PORT, () => {
    console.log('Server running on http://localhost:${HTTP_PORT}');
})