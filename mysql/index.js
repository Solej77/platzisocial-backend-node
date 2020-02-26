const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/', router);

app.listen(config.mysqlService.port, () => {
  console.log('MySQL escuchando en el puerto', config.mysqlService.port);
});