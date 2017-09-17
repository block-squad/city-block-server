const express = require('express');
const router = express.Router();
const query = require('../db/query.js')

/* GET projects listing. */
router.get('/', function(req, res, next) {
  query.getAllProjects().then(projects => {
    res.json(projects)
  })
});

router.get('/:id', function(req, res, next) {
  query.getOneProject().then(project => {
    res.json(project)
  })
});

router.get('/contributions/:id', function(req, res, next) {
  query.getAllContributionsForOneAccount().then(account => {
    res.json(account)
  })
});

module.exports = router;
