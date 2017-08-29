const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const api = require('./api/v1');

const app = express();

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup router and routes
app.use('/api', api);
app.use('/api/v1', api);

app.use((req, res) => {
  res.status(404);
  res.json({
    error: 'Error. Route not found',
  });
});

app.use((err, req, res) => {
  res.status(500);
  res.json({
    error: `${err}`,
  });
});

module.exports = app;
