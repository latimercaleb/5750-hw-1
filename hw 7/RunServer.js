//====================================================================
// Title: RunServer.js
// Description:
//   This Node.js script starts a web server on the local computer.  
// It listens on port 8080 and processes client requests.
//====================================================================

// Inclue http module
var http = require('http');

// Create http server
http.createServer(function (req, response)
{
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("<h1>Hello World!</h1>");
  response.write('<br>');
  response.write('Current date: ' + Date());
  response.write("</body>");
  response.write("</html>");
  response.end();

}).listen(8080);
