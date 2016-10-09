var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: {
    type: Number
  },
  has_rated: {
    type: []
  },
  name: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);
