// Setup empty JS object to act as endpoint for all routes
projectData = {};

const express = require('express');
const app = express();


//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dependency
const cors = require('cors');
app.use(cors());

//*alternative -> app.use(express.static('web'));
app.use(express.static('__dirname + "/index.html'));

const port = 5000;
const server = app.listen(port, listening);

function listening() {
    console.log(`Server running on http://localhost:${port}`);
    console.log("server is running")
}

// respond with "hello world" when a GET request is made to the homepage
app.get('/',function (req, res) {
  res.send('helloooooo world!!!!!');
 


})




