const express = require('express');
const router = express.Router();

// Project model
const Projects = require('../../models/projects');

router.get("/get", function (req, res) {
  Projects.find(function (err, items) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.json(items);
      res.end()
    }
  })
});

router.post("/create", function (req, res) {
  if ((req.body.src !== null) && (req.body.header !== null)){
    const newProject = new Projects({
      "src": req.body.src,
      "caption": req.body.caption,
      "header": req.body.header,
      "url": req.body.url
    });
    newProject.save().then((item) => {
      res.status(201).json(item).end();
    }).catch(error => {
      console.log(error);
      res.status(500).end();
    })
  }
});

router.delete("/:id", function (req, res) {
  Projects.findById(req.params.id)
    .then(item => item.remove().then(res.json({success: true})))
    .catch(() => res.status(500).json({success: false}))
});

module.exports = router;