var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: {
    type: int
  },
  name: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);
