var Map = require('../game/map'),
    expect = require('chai').expect;

describe('Map', function() {
    describe('map dimension', function() {
        map = new Map();
        expect(map.lenght).to.equal(5);
    });
});
