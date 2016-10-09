var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CompanySchema = new Schema({
  id: {
    type: int
  },
  name: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Company', CompanySchema);
