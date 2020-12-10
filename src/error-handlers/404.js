'use strict';

function notFoundHandler(req, res, next) {
  res.status(404).send('nothing here');
}

module.exports = notFoundHandler;