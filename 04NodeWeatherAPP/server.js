// Setup empty JS object to act as endpoint for all routes
let projectData = {};
// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const { STATUS_CODES } = require('http');
/* Dependencies */
const bodyParser = require('body-parser');
const port = 3030
const https = require('https');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
 res.sendFile(__dirname +"/weatherAPP.html")
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
          res.write("<h2>The weather is"+" "+ weatherDescription + "</h2>");
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




