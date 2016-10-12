var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var routes=require('./app/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
    console.log("Middleware: Petición realizada.");
    next(); //If you don't call next, the middleware just get stucks
});

routes(app);

app.get('/',function(req,res){ //This id to check that it works
    res.send("<h1>Company Ranking API</h1>");
});

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
