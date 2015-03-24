function Field() {
  if (!(this instanceof Field)) {
    return new Field();
  }
}

Field.prototype.type = function() {
  // Тип поля 1 - обычное поле
  return 1;
}

module.exports = Field;