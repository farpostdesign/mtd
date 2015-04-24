var Game = require('game/game'),
    gameState = require('game/game_state'),
    expect = require('chai').expect;

describe('Game', function() {
    describe('Новая игра', function() {
        var subject = Game();

        it('Имеет состояние waiting', function() {
            expect(subject.state).to.eql(gameState.waiting);
        });

        it('Не имее первого игрока', function() {
            expect(subject.player1).to.be.null
        });

        it('Не имее второго игрока', function() {
            expect(subject.player2).to.be.null
        });
    });

    describe('#isWaiting', function() {
        var subject = Game();

        describe('когда состояние игры в ожидании', function() {
            it('возвращает булево значение true', function() {
                subject.state = { waiting: true };
                expect(subject.isWaiting()).to.eq(true);
            });
        });

        describe('когда состояние игры не в ожидании', function() {
            it('возвращает булево значение false', function() {
                subject.state = { waiting: false };
                expect(subject.isWaiting()).to.eq(false);
            });
        });
    });
});
