var Map = require('./map');

var FPS = 30;

var Game = function(io) {
    var $game = this;
    this.users = [];
    this.waiting = true;

    // Игра в режиме ожидания второго игрока?
    this.is_waiting = function() {
        return $game.waiting;
    }

    // Функция основного цикла игры
    this.loop = function() {

    }

    this.start = function() {
        console.log('Game starting...');
        setInterval($game.loop, 1000 / FPS);
        console.log('Game started');
    }
}

module.exports = Game;