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

App.listen(port, () => {
  console.log(`server listening on port ${port}`)
});

