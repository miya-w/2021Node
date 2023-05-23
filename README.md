# 2021Node
1. 01NodeTemplate
2. 02NodeCalculator
3. NodeClientSide
4. NodeWeatherAPP
5. WeatherAppZipCode

## What is Node?
> Node.js, a JavaScript runtime for building server-side or desktop applications.

[What is Node? Codecademy](https://www.codecademy.com/article/what-is-node)
> As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. 

[Node About](https://nodejs.org/en/about/)
## Node.js Practice 
Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.[JavaScript and Node.js](https://www.codecademy.com/article/what-is-node)

## What Can Node.js Do? 
>   - Node.js can generate dynamic page content
>    - Node.js can create, open, read, write, delete, and close files on the server
>    - Node.js can collect form data
>    - Node.js can add, delete, modify data in your database

[Node.js Introduction W3s](https://www.w3schools.com/nodejs/nodejs_intro.asp)
### Node REPL
- Read
- Evaluation
- Print
- Loop

### Node Module 
Consider modules to be the same as JavaScript libraries.[W3s](https://www.w3schools.com/nodejs/nodejs_modules.asp)
To include a module, use the ***require()*** function with the name of the module:
```jacascript
//example
var http = require('http');
```
[Module document](https://nodejs.org/docs/latest-v14.x/api/modules.html)

---
## What is NPM?
- NPM is a package manager for Node.js packages, or modules if you like.
- [npmjs](www.npmjs.com) hosts thousands of free packages to download and use.

## express
- Express is the most popular Node web framework It provides mechanisms to:
   - Write handlers for requests with different HTTP verbs at different URL paths (routes).
   - Add additional request processing "middleware" at any point within the request handling pipeline.
[Hello World Express](https://expressjs.com/en/starter/hello-world.html)
[Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
---
# Goal
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

- Download Node.js.
- Install the following packages using npm.
```javascript
npm init
npm install express
npm install cors
npm install body-parser
```


- Clone this repository.
cd into project directory.
Start the local server from command line.
// start the server
node server.js
// leave the server
ctrl + C


// Start a server 
```javascript
const express = require("express");

const app = express();
app.listen(3000, function(){
    console.log('server start on 3000')
});

```