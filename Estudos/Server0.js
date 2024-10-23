var http = require('http');

var dt = require("./index");
var soma = require("./index");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! ' + soma.Sum());
}).listen(3333);