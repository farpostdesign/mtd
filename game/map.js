var Field = require('./field');

var Map = function() {
  var map = [];

  for(i = 0; i < 11; ++i) {
    for(j = 0; j < 5; ++j) {
      map[i][j] = new Field();
    }
  }
}

module.exports = Map;