  const opportunitys = require('../controller/opportunityController.js');
  const express = require('express');
  const router = express.Router();

 const request = require('request');

const makeRequest = (method, url, body, headers) => {
    return new Promise((resolve, reject) => {
        const settings = {
            method,
            url,
            body,
            headers
        }
        return request(settings, (err, data, body) => {
            if (err) return reject(err);
            return resolve(body);
        })
    })
}

(async () => {
    const deals = await makeRequest('GET', 'urlPipeDriveDeals', { headers: 'se tiver' });

    for(const deal of deals) {
        const bling = {
           data,
	   valor
        }

        await makeRequest('POST', 'urlBlingPostPedido', bling, { headers: 'x-seller-id' });
    }
})()



  

  router.get('/oportunity', opportunitys.findAll);



module.exports = app => app.use('/storage', router);
