var Game = require('./game');
var message = require('./message');

var Core = function(io) {
    var $core = this;

    this.init_io = function() {
        io.on('connection', function(socket) {
            console.log('New user connected');

            // Отправляем клиентам сообщение о подключении нового игрока
            io.emit('new_user', JSON.stringify({ message: message('new_user_connected') }));

            socket.on('disconnect', function() { console.log(message('user_disconnected')) });
        });
        console.log('Core: socketio initialized');
    }

    this.start = function() {
        console.log('Core starting...');
        $core.init_io();
        console.log('Core started');
    }
}

module.exports = Core;