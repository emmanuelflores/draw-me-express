//Express dependencies
var express = require('../node_modules/express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , simple = require('./routes/simple')
  , http = require('http')
  , path = require('path');

var app = express();

//General app configuration
app.configure(function(){
	app.set('port', process.env.PORT || 3000);//setup the port
	//start using the jade dependencies
	app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

//Error handlers
app.configure('development', function(){
  app.use(express.errorHandler());
});

//Setup routes
app.get('/', routes.index);//GET home page.
app.get('/users', user.list);//GET users listing.

//Enable socket.io, start broadcasting
var server = http.createServer(app).listen(app.get('port'));//server listens to the port configured
var io = require('socket.io').listen(server, function(){
	console.log("Express server is listening to port " + app.get('port'));
});


//when an user connects to the server, open a socket
io.sockets.on('connection', function (socket){
	socket.on('ping', function ( data ) {
		//server recieves a ping event from the browser
		//response time
		console.log('socket: server recieves ping');
		//Emit a pong event to all the listening browsers
		io.sockets.emit( 'pong', data );
		console.log('socket: server sends pong to all');
	});

	//broadcast the drawing
	socket.on( 'drawCircle', function( data, session ) {
        socket.broadcast.emit( 'drawCircle', data );
    });
    socket.on( 'drawCircleNoFill', function( data, session ) {
        socket.broadcast.emit( 'drawCircle', data );
    });
});