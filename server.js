require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.json({limit: '50mb', extended: true}));

const db = process.env.MONGODB_URL;

mongoose
  .connect(db, {
    dbName: "portfolio",
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB connected ...'))
  .catch(err => console.log(err));

app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/mail', require('./routes/api/mail'));

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});

