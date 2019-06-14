const express = require('express');
const bodyParser = require('body-parser');

const App = express();
const port = 4000;

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));

App.get("/", function (req, res) {
  res.send("Hello world")
});

App.listen(port, () => {
  console.log(`server listening on port ${port}`)
});

