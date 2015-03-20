var Game = require('./game');
var User = require('./user');
var message = require('./message');

var Core = function(io) {
    var $core = this;
    this.users = [];
    this.last_waiting_game = null;

    // Добавить пользователя в игру (создать новую в режиме 
    // ожидания второго игрока или присоединить к уже созданной)
    this.assign_user = function(user) {
        if($core_users.length % 2) {
            var room_io = io.of('Room number ' + Math.random());
            $core.last_waiting_game = new Game(room_io, user);
        } else {
            $core.last_waiting_game.add_second_player(user);
        }
    }

    this.init_io = function() {
        io.on('connection', function(socket) {
            console.log('New user connected');

            var user = new User();
            $core.assign_user(user);

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