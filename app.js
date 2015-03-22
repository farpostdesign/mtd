
/**
 * Module dependencies.
 */

var express   = require('express'),
    logger    = require('morgan'),
    enchilada = require('enchilada'),
    http      = require('http'),
    socketio  = require('socket.io'),
    Core      = require('game/core');

var app = express();

// Configuration
app.use(logger('common'));
app.set('env', process.env.MODE || 'development');
app.set('port', process.env.PORT || 3000);

// Serve static files
app.use(express.static(__dirname + '/public'));

// Serve browserify files
app.use(enchilada(__dirname + '/client'));

// Create server from express app and install socket.io
var server = http.createServer(app);
var io     = socketio(server);

// Hook up to game/core
Core(io).start();

// Listen
server.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});

