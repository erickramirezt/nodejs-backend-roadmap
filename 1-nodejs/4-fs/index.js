// node.js file system module

// node.js as a file server

// the node.js file system module allows you to work with the file system on your computer
// to include the file system module, use the require() method

// var fs = require('fs');

// common use for the file system module:
// read files
// create files
// update files
// delete files
// rename files

// read files
// the fs.readFile() method is used to read files on your computer
// assume we have the following html file (located in the same folder as node.js):

// create a node.js file that reads the html file, and return the content:

// example
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// create files
// the file system module has methods for creating new files
// fs.appendFile()
// fs.open()
// fs.writeFile()

// the fs.appendFile() method appends specified content to a file. if the file does not exist, the file will be created

// example
// create a new file the appendFile() method:
// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'hello content!', function(err) {
//   if (err) throw err;
//   console.log('saved!');
// });

// the fs.open() method takes a 'flag' as the second argument. if the flag is 'w' for writing, the specified file is opened for writing. if the file does not exist, an empty file is created

// example
// create a new, empty file using the open() method:
// var fs = require('fs');
// fs.open('mynewfile2.txt', 'w', function(err, file) {
//   if (err) throw err;
//   console.log('saved!');
// });

// the fs.writeFile() method replaces the specified file and content if it exists. if the file does not exist, a new file, containing the specified content, will be created

// example
// create a new file using the writeFile() method:
// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'hello content!', function(err) {
//   if (err) throw err;
//   console.log('saved!');
// });

// update files
// the file system module has methods for updating files
// fs.appendFile()
// fs.writeFile()

// the fs.appendFile() method appends the specified content at the end of the specified file

// example
// append 'this is my text' to the end of the existing file 'mynewfile1.txt':
// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'this is my text', function(err) {
//   if (err) throw err;
//   console.log('updated!');
// });

// the fs.writeFile() method replaces the specified file and content

// example
// replace the content of the file 'mynewfile3.txt':
// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'this is my text', function(err) {
//   if (err) throw err;
//   console.log('updated!');
// });

// delete files
// to delete a file with the file system module, use the fs.unlink() method
// the fs.unlink() method deletes the specified file

// example
// delete the file 'mynewfile2.txt':
// var fs = require('fs');
// fs.unlink('mynewfile2.txt', function(err) {
//   if (err) throw err;
//   console.log('deleted!');
// });

// rename files
// to rename a file with the file system module, use the fs.rename() method
// the fs.rename() method renames the specified file

// example
// rename the file 'mynewfile1.txt' to 'myrenamedfile.txt':
var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
  if (err) throw err;
  console.log('renamed!');
});