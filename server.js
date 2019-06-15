const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const projectSchema = require('./schema/projectSchema');

const App = express();
const port = 4000;

// MongoDB database address
const database = 'mongodb://localhost:27017/portfolio';

// Compiling data Schema
const Project = mongoose.model('Project', projectSchema);

mongoose.connect(database, {useNewUrlParser: true}).then(() => {
  console.log('connected to mongodb')
  }).catch((err) => {
  console.log(err)
});

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));

App.get("/", function (req, res) {
  Project.find(function (err, items) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.json(items);
      res.end()
    }
  })
});

App.post("/create", function (req, res) {
  if ((req.body.src !== null) && (req.body.header !== null)){
    const newProject = new Project({
      "src": req.body.src,
      "caption": req.body.caption,
      "header": req.body.header
    });
    newProject.save().then((item) => {
      res.status(201).json(item).end();
    }).catch(error => {
      console.log(error);
      res.status(500).end();
    })
  }
});

App.delete("/delete", function (req, res) {
  Project.findById(req.body.id)
    .then(item => item.remove().then(res.json({success: true})))
    .catch(err => res.status(500).then(res.json({success: false})))
});

App.listen(port, () => {
  console.log(`server listening on port ${port}`)
});

