var Game    = require('game/game');
var message = require('game/message');
var debug   = require('debug')('mdt:core');

function Core(io) {
  if (!(this instanceof Core)) {
    return new Core(io);
  }
  
  this.io = io;
}

Core.prototype.init_io = function() {
  this.io.on('connection', function(socket) {
    debug('New user connected');
    
    // Отправляем клиентам сообщение о подключении нового игрока
    this.io.emit('new_user', { 
      message: message('new_user_connected')
    });
    
    socket.on('disconnect', function() {
      debug(message('user_disconnected'));
    });
  }.bind(this));
  
  debug('socketio initialized');
}

Core.prototype.start = function() {
  debug('starting...');
  this.init_io();
  debug('started');
}

module.exports = Core;