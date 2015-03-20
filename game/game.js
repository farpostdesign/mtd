var Map = require('./map')

var Game = function(io) {
  var $game = this

  this.loop = function() {

  }

  this.start = function() {
    setInterval($core.loop, 33)
  }
}

module.exports = Game