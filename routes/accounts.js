const express = require('express');
const router = express.Router();
const query = require('../db/query.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  query.getAllAccounts().then(accounts => {
    res.json(accounts)
  })
});

router.get('/:id', function(req, res, next) {
  query.getOneAccount().then(account => {
    res.json(account)
  })
});

router.get('/contributions/:id', function(req, res, next) {
  query.getAllContributionsForOneAccount().then(account => {
    res.json(account)
  })
});

module.exports = router;
