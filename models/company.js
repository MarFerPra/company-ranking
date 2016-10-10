var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CompanySchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  total_score: {
    type: Number
  },
  rated_by: {
    type: [Schema.Types.ObjectId]
  }
});

module.exports = mongoose.model('Company', CompanySchema);
