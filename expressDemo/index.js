var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/home', function (req, res) {
  res.send('homepage request to the homepage');
})
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
})

var server = app.listen(3300, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});