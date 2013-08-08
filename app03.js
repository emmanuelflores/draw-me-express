//Web Sockets
/*
Wikipedia: 'WebSocket is a web technology providing full-duplex communications channels over a single TCP connection'.
Create a basic websocket app using node.js and socket.io
*/

//really simple socket.io example
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

app.listen(4000);

function handler(req, res) {
  fs.readFile(__dirname + '/index.html', function(err, data){
    if (err) {
      res.writeHead(500);
      res.end("Error loading index.html");
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function(socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function(data) { console.log(data); });
});
