'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

//middleware
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const foodRouter = require('./routes/food');

app.use(express.json());
app.use(logger);
app.use(foodRouter);

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.use('*', notFoundHandler);
app.use(serverError);

module.exports = {
  server: app,
  start: port => {
    if(!port) { throw new Error('missing port');}
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  },
};
