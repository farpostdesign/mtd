var Field   = require('game/field'),
    Matrix  = require('util/matrix');

var Map = function() {
  return Matrix(11, 5, new Field());
}

module.exports = Map;