//Add routes related tests here

//Mocha will execute this tests

var assert = require('chai').assert; //Assertion library
var request = require('supertest'); //To test an API rest
var mongoose=require('mongoose');

var app = require('express')();
var routes = require('../app/routes');

routes(app); //all routes set to this test app



describe("Routes", function() {
    //The done callback is only needed if the test is going to do async stuff
    before(function(done){ //before the first test
        mongoose.connect('mongodb://localhost/testdb', function(error) {
            done(error);
        });
    });
    after(function(){ //after all the tests
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
    it("/", function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                assert.notOk(err);
                assert.ok(res);
                assert.strictEqual(res.body, "<h1>Company Ranking API</h1>");
                done();
            });
    });
    
    it.skip("Another test",function(){
        //Another stupid test here
        
    });
});
