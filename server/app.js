const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

module.exports = app;

// logging middleware
app.use(morgan('dev'));
app.use(cors());

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// auth and api routes
app.use('/api', require('./api'));
app.use('/s3url', require('./s3'));
app.use('/barcode', require('./barcode'));
app.use('/predict', require('./predict'));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'dist')));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use('*', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
