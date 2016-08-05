var http = require('http');
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('<h1>Merhaba Dünya</h1>');
});
var port = Number(process.env.PORT || 8080);
server.listen(port);