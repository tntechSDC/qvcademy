const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const HTTP_PORT = 8000;

//environment set up
app.use(cors());
app.use(express.json());

// const conUsers = new Pool({
//     user: connectionDetails.env.PG_USER,
//     host: connectionDetails.env.PG_HOST,
//     database: connectionDetails.env.PG_DATABASE,
//     password: connectionDetails.env.PG_PASSWORD,
//     port: connectionDetails.env.PG_PORT,
// });

app.listen(HTTP_PORT, () => {
    console.log('App Listening on port', HTTP_PORT)
}) //tells app to listen on the port, prints to screen we're listening on that port