var Field = require('./field'),
    Matrix = require('../lib/matrix');



var Map = function() {
    return Matrix(11, 5, new Field());
}



module.exports = Map;
