// Модуль для хранения сообщений

var LANGUAGE = 'ru'

var message = function(key) {
    return {
        ru: {
            new_user_connected: 'Подсоединился новый пользователь',
            user_disconnected: 'Пользователь отсоединился'
        }
    }[LANGUAGE][key];
}

module.exports = message;