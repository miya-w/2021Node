# 02 Caculator

### Post function
By using Body Parser, we're able to parse the HTTP request that we get, and by using urlencoded we can get access to the form data, and we can then tap into each of these
as if they were just properties of the object body.


// index.html
```html
 <form action="/" method="POST"> 
        <!-- // form action="/" ->So our form has a post method, which means it's going to 
        //try and send the data that is entered into the inputs to a location that is
        //our home route. -->
                <input type="text" name="num1" placeholder="First number">
                <input type="text" name="num2" placeholder="Second number">
                <button type="submit" name="submit">Calculator</button>
            </form>
    </div>
```

### { extended: true }
- By setting that extended option to true, that basically just allows us to **post nested** objects. And it's not something that we're going to be using, but it's something that bodyParser is requiring you to explicitly declare. 
- body parser allows us to go into any of your routes and **req.body**. 
    - ex. console.log(req.body.num1)

```javascript
app.use(bodyParser.urlencoded({ extended: true }));
```
// server.js
```javascript
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


```