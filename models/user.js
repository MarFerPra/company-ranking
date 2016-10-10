var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  has_rated: {
    type: [Schema.Types.ObjectId]
  },
  name: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);
