// node.js modules

// what is a module in node.js?
// consider modules to be the same as JavaScript libraries
// a set of functions you want to include in your application

// built-in modules
// node.js has a set of built-in modules which you can use without any further installation

// include modules
// to include a module, use the require() function with the name of the module
var http = require('http')

// now your application has access to the http module, and is able to create a server
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('Hello World!')
}).listen(8080)

// create your own modules
// you can create your own modules, and easily include them in your applications
// the following example creates a module that returns a date and time object

// create a module that returns the current date and time
exports.myDateTime = function () {
  return Date()
}

// use the exports keyword to make properties and methods available outside the module file