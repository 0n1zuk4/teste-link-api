  const opportunitys = require('../controller/opportunityController.js');
  const express = require('express');

  const Pipedrive = require('Pipedrive');
  var pipedrive = new Pipedrive.Client('e30d9da4a516cc08191aa64c01e23fa7259cc6a2', { strictMode: true });

  const router = express.Router();


  pipedrive.Filters.getAll({ type: 'deals' }, function(filtersListErr, filtersList) {

		pipedrive.Deals.getAll({ filter_id: filtersList[0].get('id'), start: 0, limit: 15 }, function(dealsListErr, dealsList)
    {
			dealsList.forEach(function(deal)
      {
				console.log(deal.get('title') + ' (worth ' + deal.get('status') + ' ' + deal.get('win') + ')');
			});
		})
});

  router.get('/oportunity', opportunitys.findAll);



module.exports = app => app.use('/storage', router);
