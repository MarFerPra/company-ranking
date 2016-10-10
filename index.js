var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var User = require('./models/user');
var Company = require('./models/company');

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

var router = express.Router();

router.use(function(req, res, next){
  console.log("Middleware: Petición realizada.")
});

 /* ****** User API ****** */

router.route('/api/users')
  .post(function(req, res){
    var user = new User();
    user.id = new mongoose.Types.ObjectId;
    user.name = req.body.name;
    user.email = req.body.email;
    user.has_rated = null;

    user.save( function(error){
      if(error){
        res.send(error);
      } else {
        res.json({message: "User created successfully.", userId: user.id});
      }
    });
  })

  .get(function(req, res){
    User.find(function(error, users){
      if(error){
        res.send(error);
      } else {
        res.json(users);
      }
    });
  });

router.route('/api/users/:user_id')
  .get(function(req, res){
    var user_id = req.params.user_id
    User.findById(user_id, function(error, user){
      if(error){
        res.send(error);
      } else {
        res.json(user);
      }
    });
  });

  .put(function(req, res){
    var user_id = req.params.user_id
    User.findById(user_id, function(error, user){
      if(error){
        res.send(error);
      } else {
        if(typeof(req.body.name) !== 'undefined'){
          user.name = req.body.name;
        }
        if(typeof(req.body.email) !== 'undefined'){
          user.email = req.body.email;
        }

        user.save( function(error){
          if(error){
            res.send(error);
          } else {
            res.json({message: "User updated successfully.", userId: user.id});
          }
        });
      }
    }
  });

  .delete(function(req, res){
    if(req.params.userId){
      User.remove({
        id: req.params.userId
      }, function(error, user){
        if(error){
          res.send(error);
        } else {
          res.json({ message: "User successfully deleted.", userId: user.id });
        }
      })
    }
  });

 /* ****** Company API ****** */

  router.route('/api/companies')
    .post(function(req, res){
      var company = new Company();
      company.id = new mongoose.Types.ObjectId;
      company.name = req.body.name;
      company.description = req.body.description;
      company.total_score = req.body.total_score ? req.body.total_score : 0;
      company.rated_by = null;

      company.save( function(error){
        if(error){
          res.send(error);
        } else {
          res.json({message: "Company created successfully.", companyId: company.id});
        }
      });
    })

    .get(function(req, res){
      Company.find(function(error, companies){
        if(error){
          res.send(error);
        } else {
          res.json(companies);
        }
      });
    });

  router.route('/api/companies/:company_id')
    .get(function(req, res){
      var company_id = req.params.company_id
      Company.findById(company_id, function(error, company){
        if(error){
          res.send(error);
        } else {
          res.json(company);
        }
      });
    });

    .put(function(req, res){
      var company_id = req.params.company_id
      Company.findById(company_id, function(error, company){
        if(error){
          res.send(error);
        } else {
          if(typeof(req.body.name) !== 'undefined'){
            company.name = req.body.name;
          }
          if(typeof(req.body.description) !== 'undefined'){
            company.description = req.body.description;
          }
          if(typeof(req.body.total_score) !== 'undefined'){
            company.total_score = req.body.total_score;
          }

          company.save( function(error){
            if(error){
              res.send(error);
            } else {
              res.json({message: "Company updated successfully.", companyId: company.id});
            }
          });
        }
      }
    });

    .delete(function(req, res){
      if(req.params.companyId){
        Company.remove({
          id: req.params.companyId
        }, function(error, company){
          if(error){
            res.send(error);
          } else {
            res.json({ message: "Company successfully deleted.", companyId: company.id });
          }
        })
      }
    });


    // TODO: Implement Rating operations.
