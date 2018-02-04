var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var route = require('./app_server/routes/route');
var app = express();
//var mean = require('meanio');
//var consolidate = require('consolidate');
//var config = mean.getConfig();

//console.log("config root",config.root);

//set the view engine
app.set('views', path.join(__dirname, '/app_server/views'));
app.set('view engine','pug');

console.log("dirname",path.join(__dirname, '/app_server/views'));


//middleware functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

//use the route file to handle routes
app.use('/',route);

/*
app.get('/', function(req, res) {
  res.send('Is this thing on?');
});
*/

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});