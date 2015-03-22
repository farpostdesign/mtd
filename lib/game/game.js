var Map   = require('game/map');
var debug = require('debug')('mdt:game');
var FPS   = 30;

function Game(io) {
  
  if (!(this instanceof Game)) {
    return new Game(io);
  }
  
  this.users = [];
  this.waiting = true;
}

// Игра в режиме ожидания второго игрока?
Game.prototype.is_waiting = function() {
  return this.waiting;
}

// Функция основного цикла игры
Game.prototype.loop = function() {

}

Game.prototype.start = function() {
  debug('starting...');
  setInterval(this.loop.bind(this), 1000 / FPS);
  debug('started');
}

module.exports = Game;