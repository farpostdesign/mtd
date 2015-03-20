var Map = require('./map');

var FPS = 30;

var Game = function(io, user) {
    var $game = this;
    this.first_user = user;
    this.second_user = null;
    this.users = [first_user, second_user];
    this.waiting = true;
    this.map = new Map();

    // Игра в режиме ожидания второго игрока?
    this.is_waiting = function() {
        return $game.waiting;
    }

    // Добавление второго игрока в игру
    this.add_second_player = function(user) {
        $game.second_user = user;
    }

    // Функция основного цикла игры
    this.loop = function() {

    }

    // Отправляем карту игрокам
    this.send_map = function() {
        io.emit('send_map', JSON.stringify({ map: $game.map.get_serialize() }));
    }

    this.start = function() {
        console.log('Game starting...');

        $game.send_map();
        setInterval($game.loop, 1000 / FPS);

        console.log('Game started');
    }
}

module.exports = Game;