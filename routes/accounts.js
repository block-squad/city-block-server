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
  query.getOneAccount(req.params.id).then(account => {
    res.json(account)
  })
});

router.get('/contributions/:id', function(req, res, next) {
  query.getAllContributionsForOneAccount(req.params.id).then(account => {
    res.json(account)
  })
});

router.post('/', function(req, res, next) {
  query.postToAccount(req.body).then(account => {
    res.json(account)
  })
});

router.patch('/:id', function(req, res, next) {
  query.updateAccount(req.body, req.params.id).then(account => {
    res.json(account)
  })
});

router.delete('/:id', function(req, res, next) {
  query.deleteAccount(req.params.id).then(account => {
    res.json(account)
  })
});

module.exports = router;
