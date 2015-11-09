var path = require('path');
var express = require('express');
var morgan = require('morgan');

var app = express();

var port = process.env.PORT || 3000;

app.use(morgan('combined'));

app.use('/static', express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, '0.0.0.0', function(err) {
  if(err) console.error(err);
});
