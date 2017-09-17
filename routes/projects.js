const express = require('express');
const router = express.Router();
const query = require('../db/query.js')

/* GET projects listing. */
router.get('/', function(req, res, next) {
  query.getAllProjects().then(projects => {
    return Promise.all(projects.map((project) => {
      return query.getContributionsByProject(project.id)
        .then((contributions) => {
          project.contributions = contributions;
          return project
        })
    })).then((data) => {
      let projects = data.sort((a,b) => {
        return a.id - b.id
      })
      res.json(projects)
    })
  })
});

router.get('/:id', function(req, res, next) {
  query.getOneProject(req.params.id).then(projects => {
    return Promise.all(projects.map((project) => {
      return query.getContributionsByProject(project.id)
        .then((contributions) => {
          project.contributions = contributions;
          return project
        })
    })).then((data) => {
      res.json(data)
    })
  })
});

router.post('/', function(req, res, next) {
  query.postToProject(req.body).then(project => {
    res.json(project)
  })
});

router.patch('/:id', function(req, res, next) {
  query.updateProject(req.body, req.params.id).then(project => {
    res.json(project)
  })
});

router.delete('/:id', function(req, res, next) {
  query.deleteProject(req.params.id).then(project => {
    res.send("project deleted")
  })
});

module.exports = router;
