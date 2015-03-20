
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require(__dirname + '/routes/router')(express);

var app = express();

// Configuration
app.set('env', process.env.MODE || 'development');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(routes);

app.use('/public', express.static(__dirname + '/public'));


var server = app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});


var io = require('socket.io').listen(server);

var Core = require('./game/core');
var core = new Core(io);
core.start();
