const Opportunity = require('../models/opportunity');



exports.findAll = async (req, res) => {

  const opportunitys  = await Opportunity.findAll();

  return res.json(opportunitys);
};
