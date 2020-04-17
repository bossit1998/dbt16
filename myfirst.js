var http = require('http');
var ext=require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("DAte is " + ext.myDateTime());
  res.write(req.url);
  res.end(' Hello World!');
}).listen(8080);