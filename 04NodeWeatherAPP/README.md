
 ## WeatherAPP(CityName)

- Using OpenWeatherMap API key,
  - Create an account on https://openweathermap.org/api.API  
  - retrive weather information by city name entered by the user. 

 # Goal

- setting up **Node** environment with **Express** and project dependencies
- setting up a server with `GET` and `POST` routes
- accessing a `GET` route on the server side from a function called on the client side

# API
- The definition of an API?
    - API is a set of commands, functions, protocols and objects that programmers can use to create software or interact with an external system.
-  APIs, you will often need to think about things including
    - endpoints, 
    - paths,
    - parameters,
    - authentication.

## JSON
- A JSON format stands for Javascript Object Notation. 

##  Making GET Requests with the Node HTTPS Module
 - [5 Ways to Make HTTP Requests in Node.js](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)
### HTTPS module
- [Node.js v16.20.0 documentation](https://nodejs.org/dist/latest-v16.x/docs/api/https.html)
*** https.get(url[, options][, callback]) ***
```javascript

const https = require('https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
```
## Weather API - Current Location
- Don't need the Post Method

```javascript
const express = require("express");
const https = require("https") 
//this HTTPS module.

const app = express();

app.get("/",function(req,res){
	res.send("Server is up and running.")
	const url = https://api.openweathermap.org/data/2.5/weather?q=melbourne,au&appid=3917f3a764d0394f234b9a09d3463ef4&units=metric
  
  http.get(url,function(response){
//HTTPS module and call the get method. Now the get method is going to need a URL.
	console.log(response.statusCode);


//Now I can simply pass the URL in as the first parameter, and then I can create my
//callback function and I can see everything all in one line. 
// Now this callback function is going to give us back a response.
//so I'm going to call this the full name, the response, and when we get back our
// response, all that I'm going to do is just log this response to see whether if 
//this entire process of making a HTTP get request over the Internet to this URL, 
//where we're supposed to fetch some data.

response.on("data", function(data){
		const weatherData = JSON.parse(data)
//JSON.parse(data)->
//that by converting the data into a Javascript object. 
//And to do that we would need to write JSON. parse, and this will turn a JSON 
//in some sort of string format,and then turn it into an actual Javascript object.
		
		const temp = weatherData.main.temp;
		const weatherDescription = weatherData.weather[0].description;
		const icon = weatherData.weather[0].icon
		const imageURL = "http://openweathermap.org/img/wn/"
		res.write("<p>The weather is currently" + weatherDescription + "</p>");
		res.write("<h1>The temperature is " + temp + "degree Celcius</h1>");
		res.write("<img src= "+imageURL +">")
		res.send(); 
// So we know that we can only have one res.send, 
// but we can have multiple res.write,
	})
})
//we can also tap into the response that we get back, and call
//a method called on, and search through it for some data.
//Now this will correspond to the actual message body that we got back, 
//that OpenWeatherMap has actually sent us.

app.listen(3000, function(){
	console.log("server is running on port 3000.")
})

```
# Open Weather API - Location 
- Post method
- Body Parser
- app.use(bodyParser.urlencoded({extended: true}));
bodyParser.urlencoded. This is the special one that we use when we're trying to parse data that comes from an HTML form. So whenever you're trying to grab the information that gets posted to your server from an HTML form, you're going to be using urlencoded.And in addition to that, we're going to add an option called ‘extended’, and we're going to set it to be ‘true’.
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
  <form class="" action="/" method="POST">
    <label for="cityInput">City Name: </label>
    <input id="cityInput" type="text" name="cityName">
    <button type="submit">Submit</button>
    
</form>
</body>
</html>
```


```javascript
//app.js

// Setup empty JS object to act as endpoint for all routes
let projectData = {};
// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const { STATUS_CODES } = require('http');
/* Dependencies */
const bodyParser = require('body-parser');
const port = 3000
const https = require('https');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
 res.sendFile(__dirname +"/index.html")
})

 
app.post("/", function(req,res){
    // console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "3917f3a764d0394f234b9a09d3463ef4";
    const unit = "metric"

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units=" + unit
    https.get( url,function(response){
      console.log(response.statusCode)
      response.on('data',function(data){
          const weatherData = JSON.parse(data)
          const temp = weatherData.main.temp;
          const weatherDescription = weatherData.weather[0].description;
          const icon = weatherData.weather[0].icon
          const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png"
          res.write("<p>The weather is"+" "+ weatherDescription + "</p>");
          res.write("<h1>The temperature in "+ query +"is " + temp + "degree Celcius</h1>");
          res.write("<img src= "+imageURL +">")
          res.send(); 
      })
    })  
    

    // console.log("the post receive");
})

    



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


```

# Dependencies
Cool tech stuff used in this project:

- Node.js
    Official Guides for  [https://nodejs.org/en/docs/][PlDb]
- Express framework
    - Example of an Express server
    - Routing for Express
- Node.js packages:
    - cors
    - body-parser

## Getting Started

- Download Node.js.
- Install the following packages using npm.
```javascript
npm init
npm install express
npm install cors
npm install body-parser
```
- NodeMon
```
npm install -g nodemon
```

- Clone this repository.
```javascript
// into project directory.
cd projectName 
// Start the local server from command line.
start the server
// node server.js
// leave the server
ctrl + C
```
