var express = require('express');
var path = require("path");
var app = express();

app.use(express.static("./app/dist"));

var routes = require('./app/routes');

routes(app);

var port = process.env.PORT || 8080;

var mongoose = require('mongoose');

var db_url = 'mongodb://localhost/testdb';


var db_user = process.env.DB_USER || null;
var db_password = process.env.DB_PASSWORD || null;

if(db_user && db_password && process.env.NODE_ENV == 'production'){
  db_url = 'mongodb://'+ db_user + ':' + db_password + '@ds147487.mlab.com:47487/company-ranking';
}

mongoose.connect(db_url, {user: db_user, password: db_password}, function(error) {
    if (error) {
        console.log("Error connecting to database.");
    } else {
        console.log("Successfully connected to database.");
    }
    startServer(port);
});

function startServer(port){
  app.listen(port,function(err){
      if(err) console.log("Server error "+err);
      else console.log("Server listening at port "+port);
  });
}

        // TODO: Implement Rating operations.
