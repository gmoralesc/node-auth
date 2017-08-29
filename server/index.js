const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');
const api = require('./api/v1');

const app = express();

// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.db.url, {
  useMongoClient: true
});

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
