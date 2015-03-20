var Game = function(io) {
  var $game = this

  this.loop = function() {
    
  }

  this.init_io = function() {
    io.on('connection', function(socket) {
      console.log('a user connected')
    })
  }

  this.start = function() {
    $game.init_io()
    setInterval($game.loop, 33)
  }
}

module.exports = Game