 # HelloWorld

``` 
//get method
// app.get('/',function (req, res) {
//   res.send("hello") 
 
// })
```
### create different route
```
 app.get('/',function (req, res) {
  res.send("hello") 
  })
   app.get('/about',function (req, res) {
  res.send("My name is Mia!") 
  })
   app.get('/hobby',function (req, res) {
  res.send("Beer& coffee") 
  })
```

 ---
 ## Goal
- setting up **Node** environment with **Express** and project dependencies
- setting up a server with `GET` and `POST` routes
- accessing a `GET` route on the server side from a function called on the client side

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

# Getting Started
---

- Download Node.js.
- Install the following packages using npm.
>- $npm install express
>- $ npm install cors
>- $ npm install body-parser



- Clone this repository.
>- cd into project directory.
- Start the local server from command line.

>- $ node server.js