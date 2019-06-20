require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const projectSchema = require('./schema/projectSchema');
const path = require('path');

const App = express();
const port = process.env.PORT || 8000;

// Compiling data Schema
const Project = mongoose.model('Project', projectSchema);

mongoose.connect(process.env.MONGODB_URL, {dbName: "portfolio", useNewUrlParser: true}).then(() => {
  console.log('connected to mongodb')
  }).catch((err) => {
  console.log(err)
});

App.use(bodyParser.json({limit: "50mb", extended: true}));
App.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
App.use(express.static(path.join(__dirname, "client", "build")));

// Define CORS
App.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  next();
});

App.get("/api", function (req, res) {
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

App.delete("/delete", function (req, res) {
  Project.findById(req.body.id)
    .then(item => item.remove().then(res.json({success: true})))
    .catch(() => res.status(500).json({success: false}))
});

App.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});

App.listen(port, () => {
  console.log(`server listening on port ${port}`)
});

