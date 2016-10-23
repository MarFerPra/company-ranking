var bodyParser = require('body-parser');

var User = require('./models/user');
var Company = require('./models/company');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/',function(req,res){ //This is to check that it works, remove if unwanted
        res.json("<h1>Company Ranking API</h1>");
    });

    app.get('/home', function(req, res){
      res.sendFile(__dirname + '/views/home.html');
    });

    app.use(function(req, res, next) {
        console.log("Middleware: Petición realizada.");
        next(); //If you don't call next, the middleware just get stucks
    });

    /* ****** User API ****** */

    app.get('/api/users', function(req, res) {
        User.find(function(error, users) {
            if (error) {
                res.send(error);
            } else {
                res.json(users);
            }
        });
    });
    app.post('/api/users', function(req, res) {
        var user = new User();
        //user.id = new mongoose.Types.ObjectId; //Mongoose SHOULD add the id automatically
        user.name = req.body.name;
        user.email = req.body.email;
        user.has_rated = null;

        user.save(function(error) {
          if (error) {
              res.json({
                text: "Error creating the user.",
                success: false
              });
          } else {
              res.json({
                  text: "User created successfully.",
                  success: true,
                  model: user
              });
          }
        });
    });

    app.get('/api/users/:user_id', function(req, res) {
        var user_id = req.params.user_id
        User.findById(user_id, function(error, user) {
            if (error) {
                res.send(error);
            } else {
                res.json(user);
            }
        });
    });

    app.put('/api/users/:user_id', function(req, res) {
        var user_id = req.params.user_id
        User.findById(user_id, function(error, user) {
            if (error) {
                res.send(error);
            } else {
                if (typeof(req.body.name) !== 'undefined') {
                    user.name = req.body.name;
                }
                if (typeof(req.body.email) !== 'undefined') {
                    user.email = req.body.email;
                }

                user.save(function(error) {
                    if (error) {
                        res.send(error);
                    } else {
                        res.json({
                            message: "User updated successfully.",
                            userId: user.id
                        });
                    }
                });
            }
        });
    });

    app.delete('/api/users/:user_id', function(req, res) {
        if (req.params.userId) {
            User.remove({
                id: req.params.userId
            }, function(error, user) {
                if (error) {
                    res.send(error);
                } else {
                    res.json({
                        message: "User successfully deleted.",
                        userId: user.id
                    });
                }
            })
        }
    });

    /* ****** Company API ****** */

    app.get('/api/companies', function(req, res) {
        Company.find(function(error, companies) {
            if (error) {
                res.send(error);
            } else {
                res.json(companies);
            }
        });
    });

    app.post('/api/companies', function(req, res) {
        var company = new Company();
        //company.id = new mongoose.Types.ObjectId;
        company.name = req.body.name;
        company.description = req.body.description;
        company.total_score = req.body.total_score ? req.body.total_score : 0;
        company.rated_by = null;

        company.save(function(error) {
            if (error) {
                res.json({
                  text: "Error creating the company.",
                  success: false
                });
            } else {
                res.json({
                    text: "Company created successfully.",
                    success: true,
                    model: company
                });
            }
        });
    })

    app.get('/api/companies/:company_id', function(req, res) {
        var company_id = req.params.company_id
        Company.findById(company_id, function(error, company) {
            if (error) {
                res.send(error);
            } else {
                res.json(company);
            }
        });
    })

    app.put('/api/companies/:company_id', function(req, res) {
        var company_id = req.params.company_id
        Company.findById(company_id, function(error, company) {
            if (error) {
                res.send(error);
            } else {
                if (typeof(req.body.name) !== 'undefined') {
                    company.name = req.body.name;
                }
                if (typeof(req.body.description) !== 'undefined') {
                    company.description = req.body.description;
                }
                if (typeof(req.body.total_score) !== 'undefined') {
                    company.total_score = req.body.total_score;
                }

                company.save(function(error) {
                    if (error) {
                        res.send(error);
                    } else {
                        res.json({
                            message: "Company updated successfully.",
                            companyId: company.id
                        });
                    }
                });
            }
        });
    })
    app.delete('/api/companies/:company_id', function(req, res) {
        if (req.params.companyId) {
            Company.remove({
                id: req.params.companyId
            }, function(error, company) {
                if (error) {
                    res.send(error);
                } else {
                    res.json({
                        message: "Company successfully deleted.",
                        companyId: company.id
                    });
                }
            });
        } //TODO: add else here, return an error code (bad request)
    });
};
