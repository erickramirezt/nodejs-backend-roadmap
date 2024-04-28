// node.js http module

// the built-in http module
// node.js has a built-in module called http, which allows node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
// to include the http module, use the require() method
var http = require('http')

// node.js as a web server
// the http module can create an http server that listens to server ports and gives a response back to the client
// use the createServer() method to create an http server

// create a server object
// http.createServer(function (req, res) {
//   res.write('Hello World!')
//   res.end()
// }).listen(8080)

// the function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080

// add an http header
// if the response from the http server is meant to be displayed as HTML, you should include an http header with the correct content type
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' })
//   res.write('Hello World!')
//   res.end()
// }).listen(8080)

// the first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers

// read the query string
// the function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object)
// this object has a property called url which holds the part of the url that comes after the domain name
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' })
//   res.write(req.url)
//   res.end()
// }).listen(8080)

// if you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080/summer

// split the query string
// there are built-in modules to easily split the query string into readable parts, such as the url module
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);