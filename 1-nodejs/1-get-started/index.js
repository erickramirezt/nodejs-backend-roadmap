// download nodejs from https://nodejs.org/en/download/

// getting started
// once you have installed nodejs, let's try to display hello world in a web browser

// create a node.js file and add the following code:

var http = require('http')

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('Hello World!')
  })
  .listen(8080)

// the code tells the computer to write "Hello World!" if anyone tries to access your computer on port 8080

// command line interface
// node.js files must be initiated in the "Command Line Interface" (CLI) or terminal
// in windows, press the windows key and type cmd and navigate to the folder that contains the file

// initiate the node.js file
// the file you have just created must be initiated by node.js before any action can take place
// start your command line interface, write the node index.js and hit enter

// now your computer works as a server
// if anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return
