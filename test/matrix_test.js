var Matrix = require('util/matrix'),
    expect = require('chai').expect;

describe('Matrix', function() {
    describe('при параметрах 3, 5, 0', function() {
        it('возвращает матрицу с 3 колонками, 5 строками, и значениями 0', function() {
            var expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
            expect(Matrix(3, 5, 0)).to.deep.equal(expected);
        });
    });

    describe('при параметрах 3, 2, {}', function() {
        it('возвращает матрицу с 3 колонками, 2 строками и значением {}', function() {
            var expected = [[{}, {}, {}], [{}, {}, {}]];
            expect(Matrix(3, 2, {})).to.deep.equal(expected);
        });
    });

    describe('при параметрах 0, 0, 1', function() {
        it('возвращает пустой массив', function() {
            expect(Matrix(0, 0, 1)).to.deep.equal([]);
        });
    });

    describe('при параметрах 10, 0, 1', function() {
        it('возвращает пустой массив', function() {
            expect(Matrix(10, 0, 1)).to.deep.equal([]);
        });
    });

    describe('при параметрах 0, 2, 1', function() {
        it('возвращает пустой массив', function() {
            var expected = [[], []];
            expect(Matrix(0, 2, 1)).to.deep.equal(expected);
        });
    });
});

