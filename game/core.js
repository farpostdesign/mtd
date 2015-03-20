var Game = require('./game')

var Core = function(io) {
  var $core = this

  this.init_io = function() {
    io.on('connection', function(socket) {
      console.log('a user connected')
    })
  }

  this.start = function() {
    $core.init_io()
    setInterval($core.loop, 33)
  }
}

module.exports = Core