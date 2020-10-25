// Example minimal server from StackOverflow comment by user B T (https://stackoverflow.com/users/122422/b-t)
// https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server/26354478#26354478
// 
// run the server using `node server.js` and you can access any files that are in the same directory.
// in a browser, visit http://localhost:9615/[filename]

// example url (self reference) http://localhost:9615/server.js

var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
var baseDirectory = __dirname   // or whatever base directory you want

var port = 3000

http.createServer(function (request, response) {
    try {
        var requestUrl = url.parse(request.url)

        // need to use path.normalize so people can't access directories underneath baseDirectory
	var normalizedPath = path.normalize(requestUrl.pathname)
	if(normalizedPath == "/") {
		normalizedPath = "/index.html"
	}
        var fsPath = baseDirectory+normalizedPath

        var fileStream = fs.createReadStream(fsPath)
        fileStream.pipe(response)
        fileStream.on('open', function() {
             response.writeHead(200)
        })
        fileStream.on('error',function(e) {
             response.writeHead(404)     // assume the file doesn't exist
             response.end()
        })
   } catch(e) {
        response.writeHead(500)
        response.end()     // end the response so browsers don't hang
        console.log(e.stack)
   }
}).listen(port)

console.log("listening on port "+port)

var url_ = 'http://localhost:3000/index.html';
var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url_);
