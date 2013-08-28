require('http').createServer(function(req,res){
	res.writeHead(200,{'Content-Type' : 'text/html'});
	res.end('<h1 style="font-style:italic;">Hello</h2> <b>World</b>');
}).listen(3000);