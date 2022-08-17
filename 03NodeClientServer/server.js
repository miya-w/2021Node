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

// *alternative -> 
// app.use(express.static('__filename + "/index.html'));
app.use(express.static('web'));


const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log(`Server running on http://localhost:${port}`);
    console.log("server is running")
}

// respond with "hello world" when a GET request is made to the homepage
app.get('/',function (req, res) {
  res.send('helloooooo world');
 
})

const data = []
app.post('/addMovie', addMovie)
// console.log(req.body)
// res.send('post received!')
function addMovie (req, res){
  
  data.push(req.body)
  console.log(req.body)
}


