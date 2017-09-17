var express = require('express');
var router = express.Router();
const query = require('../db/query.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  query.postContribution(req.body).then(contribution => {
    res.json(contribution)
  })
});


module.exports = router;
