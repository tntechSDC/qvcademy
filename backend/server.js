require('dotenv').config({ debug: true });
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const HTTP_PORT = 8000; //port that our app is listening on

//remains the same for all users, used to sign and verify all JWT tokens
const Key = process.env.SECRET_KEY;

if (!process.env.SECRET_KEY) {
    console.error("SECRET_KEY is missing!");
}

//tools for communicating with the database and getting info
app.use(cors());
app.use(bodyParser.json());

//this connects to our sqlite database
const dataBase = new sqlite3.Database('./database.db');

//post request for registration
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
            const token = jwt.sign({ userId: this.lastID, username }, Key, {
                expiresIn: '6h' //token expires in 6 hours
            })
            return res.status(201).json({ message: 'User registered successfully', userID: this.lastID, token });
        }
    })
});

//post request for login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const command = 'SELECT * FROM tblUsers WHERE email = ?';
    dataBase.get(command, [email], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (user == false) {
            return res.status(404).json({ error: 'User not found' });
        }

        //compare provided pass with hashed pass in database
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (isPasswordValid == false) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        //generating a JWT token for authenticated user
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            Key,
            { expiresIn: '6h' } // token expiration time
        );

        res.json({ message: 'Login successful', token });
    });

    dataBase.close();
})

//authenticate JWT for protected routes
function authenticateToken(req, res, next) {
    //token is sent by client to authorization header
    const token = req.headers['authorization'];
    //check if token exists
    if (token == false) return res.sendStatus(403); //no token provided

    //verifies the validity of the tokens, first decodes the token, the verifies it was signed by our key, then checks that it hasn't expired 
    jwt.verify(token, Key, (err, user) => {
        if (err) return res.sendStatus(403); // invalid token checking
        req.user = user; //Attach user info to request, allows route handlers and middleware to access user info
        next(); //pass control to the next function in the stack
    });
}

app.listen(HTTP_PORT, () => {
    console.log('Server running on http://localhost:${HTTP_PORT}');
})