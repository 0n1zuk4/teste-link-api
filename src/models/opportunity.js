const mongoose = require('../database/config');

const OpportunitySchema = new mongoose.Schema({
  dia:{
    type:Date,
    require:true,
  },
  valor:{
    type:String,
    require:true,
  },
});



const Opportunity = mongoose.model('Opportunity', OpportunitySchema);

module.exports = Opportunity;
