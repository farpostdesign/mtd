var Map = require('game/map'),
    debug = require('debug')('mtd:game'),
    gameState = require('game/game_state');

var FPS = 30;

function Game() {

  if (!(this instanceof Game)) {
    return new Game();
  }

  this.player1 = null;
  this.player2 = null;

  this.state = gameState.waiting;
};

// Игра в режиме ожидания второго игрока?
Game.prototype.isWaiting = function() {
  return this.state.waiting;
};

// Функция основного цикла игры
Game.prototype.loop = function() {};

Game.prototype.start = function() {
  debug('starting...');
  setInterval(this.loop.bind(this), 1000 / FPS);
  debug('started');
};

module.exports = Game;
