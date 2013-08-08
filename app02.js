//Express' dependencies
//we need these in order to use Express
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
});



//Setup a simple route example
//HTTP request types
//what do you want to do with data?
//get -> reading data
//post -> creating data
//poll -> update data
//delete -> destroy data
//in expres you will write something like:
app.get('/', function(req, res){//request and response
	res.send("hello world!");
});

//let's create a new request
//localhost:3000/hi
app.get('/hi', function(req, res){
	var message = [
		"<h1>Hello world!</h1>",
		"<p>semper ubi sub ubi.</p>",
		"<p>Scribit, scribit...</p>"].join("\n");

	res.send(message);

});


//routes
app.get('/simple',simple.hello);

//get the user ID
//http://www.youtube.com/watch?v=Hc3v6wbmebQ
app.get('/users/:userId',function(req, res){
	res.send("<h1>Hello, User # " + req.params.userId);
});



//Create the server
http.createServer(app).listen(app.get('port'), function(){
	console.log("Express is linstening to port " + app.get('port'));
});
