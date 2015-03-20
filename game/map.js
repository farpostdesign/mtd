var Field = require('./field');

var WIDTH = 11;
var HEIGHT = 5;

var Map = function() {
    $map = this;
    var map = [];
    var map_serialize = [];

    for(i = 0; i < HEIGHT; ++i) {
        for(j = 0; j < WIDTH; ++j) {
            map[i][j] = new Field();
            map_serialize[i][j] = map[i][j].get_type();
        }
    }

    this.get = function() {
        return map;
    }

    this.get_serialize = function() {
        return map_serialize;
    }
}

module.exports = Map;