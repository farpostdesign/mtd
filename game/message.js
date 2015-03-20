// Модуль для хранения сообщений
var message = function(key) {
  return {
    ru: {
      new_user_connected: 'Подсоединился новый пользователь',
      user_disconnected: 'Пользователь отсоединился'
    }
  }[key];
}

module.exports = message;