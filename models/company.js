var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CompanySchema = new Schema({
  id: {
    type: Number
  },
  total_score: {
    type: Number
  },
  rated_by: {
    type: [Number]
  }
  name: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Company', CompanySchema);
