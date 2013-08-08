//Express' dependencies
//we need these in order to use Express
var express = require('../node_modules/express')
  , routes = require('./routes')
  , user = require('./routes/user')
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


//Create the server
http.createServer(app).listen(app.get('port'), function(){
	console.log("Express is linstening to port " + app.get('port'));
});
