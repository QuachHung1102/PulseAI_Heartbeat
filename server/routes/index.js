var express = require('express');
var rootRouter = express.Router();
const path = require('path');
const fs = require('fs');

/* GET home page. */
rootRouter.get('/', function (req, res, next) {
  const indexPath = path.join(__dirname, '..', '..', 'client', 'dist', 'index.html');
  res.sendFile(indexPath, function (err) {
    if (err) {
      next(err);
    }
  });
});

module.exports = rootRouter;
