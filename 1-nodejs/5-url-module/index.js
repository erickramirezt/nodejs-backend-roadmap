// node.js url module

// the built-in url module
// the url module splits up a web address into readable parts
// to include the url module, use the require() method

var url = require('url')

// parse an address with the url.parse() method, and it will return a url object with each part of the address as properties

// example
// split a web address into readable parts:
var adr = 'http://localhost:8080/default.htm?year=2017&month=february'
var q = url.parse(adr, true)

console.log(q.host) // returns 'localhost:8080'
console.log(q.pathname) // returns '/default.htm'
console.log(q.search) // returns '?year=2017&month=february'

var qdata = q.query // returns an object: { year: 2017, month: 'february' }
console.log(qdata.month) // returns 'february'

// node.js file server
// now we know how to parse the query string, and in the previous chapter we learned how to make node.js behave as a file server. let us combine the two, and serve the file requested by the client
// create two html files and save them in the same folder as your node.js files

// create a node.js file that opens the requested file and returns the content to the client. if anything goes wrong, throw a 404 error
var http = require('http')
var url = require('url')
var fs = require('fs')

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true)
    var filename = '.' + q.pathname
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        return res.end('404 Not Found')
      }
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  })
  .listen(8080)
