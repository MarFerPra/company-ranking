//Add routes related tests here

//Mocha will execute this tests

var assert = require('chai').assert; //Assertion library
var request = require('supertest'); //To test an API rest
var mongoose = require('mongoose');

var app = require('express')();
var routes = require('../app/routes');

var User = require('../app/models/user');
var Company = require('../app/models/company');

routes(app); //all routes set to this test app

describe("Routes", function() {
    //The done callback is only needed if the test is going to do async stuff
    before(function(done) { //before the first test
        mongoose.connect('mongodb://localhost/testdb', function(error) {
            done(error);
        });
    });
    after(function() { //after all the tests
        //Dosconnect mongoose here (if possible)
    });
    beforeEach(function(done) {
        //This will be executed before each test
        //use this to initialize the test data
        done();
    });
    afterEach(function(done) {
        //This will be execute after each test
        //Use for cleanup
        done();
    });

    it("Vote a company", function(done) {
        var user = new User();
        user.name = 'Test user';
        user.email = 'Test@email.com';
        user.has_rated = [];

        user.save(function(error, user) {
            assert.notOk(error);
            var user_test_id = user._id;

            var company = new Company();
            company.name = "Test company";
            company.description = "Test description";
            company.total_score = 0;
            company.rated_by = [];

            company.save(function(error, company) {
                assert.notOk(error);
                var company_test_id = company._id;

                var data = {
                    user_id: user_test_id,
                    company_id: company_test_id,
                    score: 10
                }

                request(app).post('/api/company/vote').send(data).expect(200).end(function(err, res) {
                    assert.notOk(err);
                    assert.strictEqual(res.body.success, true);
                    done();

                    Company.findById(company_test_id, function(error, company) {
                        assert.notOk(error);
                        User.findById(user_test_id, function(error, user) {
                            assert.notOk(error);

                            assert.strictEqual(company.total_score, 10);
                            var hasRated = (user.has_rated.indexOf(company_test_id) > -1);
                            var ratedBy = (company.rated_by.indexOf(user_test_id) > -1);

                            assert.ok(hasRated);
                            assert.ok(ratedBy);
                        });
                    });
                });
            });
        });
    });
});
