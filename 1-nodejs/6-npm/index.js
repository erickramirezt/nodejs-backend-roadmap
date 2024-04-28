// node.js npm

// what is npm?
// npm is a package manager for node.js packages, or modules if you like. www.npmjs.com hosts thousands of free packages to download and use. the npm program is installed on your computer when you install node.js

// what is a package?
// a package in node.js contains all the files you need for a module
// modules are javascript libraries you can include in your project

// download a package
// downloading a package is very easy 
// open the command line interface and tell npm to download the package you want 
// i want to download a package called 'upper-case'

// using a package
// once the package is installed, it is ready to use
// include the upper-case package the same way you include any other module
var uc = import('upper-case')

// create a node.js file that converts the output 'hello world' into upper-case letters
var http = require('http')
var uc = import('upper-case')
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('hello world'.toUpperCase())
  res.end()
}).listen(8080)