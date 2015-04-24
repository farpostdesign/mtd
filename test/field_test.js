var Field   = require('game/field'),
    expect  = require('chai').expect;

describe('Field', function() {
    describe('type', function() {
        it('Должен возращать 1 как идетификатор поля', function() {
            var field = new Field();
            expect(field.type()).to.equal(1);
        });
    });
});
