var express = require('express');
var app = express();

var routes=require('./app/routes');

routes(app);

var port = 8080;

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb', function(error) {
    if (error) {
        console.log("Error connecting to database.");
    } else {
        console.log("Successfully connected to database.");
    }
    app.listen(port,function(err){
        if(err) console.log("Server error "+err);
        else console.log("Server listening at port "+port);
    });
});

        // TODO: Implement Rating operations.
