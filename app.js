var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Hello World! from Jeremy. see <a href="https://www.rocksetta.com">rocksetta</a>');
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
