const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

//Enable CORS for all HTTP methods
app.use(cors());

require('./routes/opportunitysRoutes')(app);






app.listen(PORT, () => {
  console.log('SERVER RUNNING ON PORT ' + PORT);
});

app.get('/', (req,res) => {
  res.send('');
});
