const express = require('express');
const cors = require('cors');
const app = express();
const HTTP_PORT = 8000;

//environment set up
app.use(cors());
app.use(express.json());

app.listen(HTTP_PORT, () => {
    console.log('App Listening on port', HTTP_PORT)
}) //tells app to listen on the port, prints to screen we're listening on that port