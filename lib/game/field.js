//
// Поле катры
//
function Field() {
    if (!(this instanceof Field)) {
        return new Field();
    }
}

Field.prototype.type = function() {
    // Тип поля 1 - обычное поле
    // TODO: избавиться от магических цифр
    // в пользу классов полей
    return 1;
}

module.exports = Field;
