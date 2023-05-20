// Setup empty JS object to act as endpoint for all routes
projectData = {};

const express = require('express');
const app = express();


//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Dependency
const cors = require('cors');
app.use(cors());

//*alternative -> app.use(express.static('web'));

app.use(express.static('web'));
// app.use(express.static('__filename + "/index.html'));

const port = 5000;
const server = app.listen(port, listening);

function listening() {
    console.log(`Server running on http://localhost:${port}`);
    console.log("server is running")
}

// respond with "hello world" when a GET request is made to the homepage
app.get('/',function (req, res) {
  res.sendFile(__filename + "/index.html") 
 
})

app.post('/',(req,res)=>{  
    
  // var num1 = req.body.num1; // -> string 
  // var num2 = req.body.num2; // -> string 

  var num1 = Number(req.body.num1); // number 
  var num2 = Number(req.body.num2); // number 
  var result = num1 + num2;
  // res.send(result)
  res.sendStatus(result)
  res.send("the result of calculation is" + result)


});





