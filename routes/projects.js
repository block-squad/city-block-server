const express = require('express');
const router = express.Router();
const query = require('../db/query.js')

/* GET projects listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
