var Map     = require('game/map'),
    expect  = require('chai').expect;

describe('Map', function() {
  it('должна имееть размер 11 на 5', function() {
    var map = new Map();

    expect(map.length).to.equal(5);

    for (var row = 0; row < 5; row++) {
      expect(map[row].length).to.equal(11);
    }
  });
});
