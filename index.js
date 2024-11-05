'use strict'

var express = require('express');
const SERVER_PORT = 3000;

var app = express()

// Define the route for the root of the site
// http://localhost:3000/
app.get('/', function(req, res){
  res.send(`Hello World from ${req.hostname}`);
});

app.listen(SERVER_PORT);
console.log(`Express started on port ${SERVER_PORT}`);
