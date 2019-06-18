require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const projectSchema = require('./schema/projectSchema');

const App = express();
const port = 1337;

// Compiling data Schema
const Project = mongoose.model('Project', projectSchema);

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}).then(() => {
  console.log('connected to mongodb')
  }).catch((err) => {
  console.log(err)
});

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));

// Define CORS
App.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  next();
});

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
    .catch(() => res.status(500).json({success: false}))
});

App.listen(port, () => {
  console.log(`server listening on port ${port}`)
});

