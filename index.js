var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var port = 8080;

if(User){
  console.log("DB: User model loaded successfully.");
}

if(Company){
  console.log("DB: Company model loaded successfully.");
}

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb', function(error){
  if(error){
    console.log("Error connecting to database.");
  } else {
    console.log("Successfully connected to database.");
  }
});

// TODO: Implement CRUD operations on both User and Company.
