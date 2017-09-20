const express = require('express');
const router = express.Router();
const query = require('../db/query.js')
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  query.getAllAccounts().then(accounts => {
    return Promise.all(accounts.map((account) => {
      return query.getContributionsByAccount(account.id)
        .then((contributions) => {
          account.contributions = contributions;
          return account
        })
    }))
    .then((data) => {
      let accounts = data.sort((a,b) => {
        return a.id - b.id
      })
      res.json(accounts)
    })
  })
});

router.get('/proposals/:id', function(req,res,next) {
  query.getAllProjects()
    .then((data) => {
      console.log();
      let result = data.filter((e) => {
        return req.params.id === e.owner_id
      })
      res.json(data.filter((e) => {
        return req.params.id == e.owner_id
      }))
    })
})

router.get('/:id', function(req, res, next) {
  query.getOneAccount(req.params.id).then(accounts => {
    return Promise.all(accounts.map((account) => {
      return query.getContributionsByAccount(account.id)
        .then((contributions) => {
          account.contributions = contributions;
          return account
        })
    })).then((data) => {
      res.json(data)
    })
  })
});

router.patch('/:id', function(req, res, next) {
  query.updateAccount(req.body, req.params.id).then(account => {
    res.json(account)
  })
});

router.delete('/:id', function(req, res, next) {
  query.deleteAccount(req.params.id).then(account => {
    res.send("account deleted")
  })
});

module.exports = router;
