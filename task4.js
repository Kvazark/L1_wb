//функция declension принимает число n и массив слов words, содержащий три формы слова в разных падежах
///В зависимости от числа и его последней цифры, определяется правильная форма слова и возвращается результат
const DeclensionModule = (function() {
    function declension(n, words) {
        let cases;

        if (n % 10 === 1 && n % 100 !== 11) {
            cases = words[0];
        } else if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) {
            cases = words[1];
        } else {
            cases = words[2];
        }

        return n + ' ' + cases;
    }

    return {
        declension: declension
    };
})();
console.log(DeclensionModule.declension(112, ['сообщение', 'сообщения', 'сообщений']));
console.log(DeclensionModule.declension(12, ['сообщение', 'сообщения', 'сообщений']));
console.log(DeclensionModule.declension(1, ['сообщение', 'сообщения', 'сообщений']));
console.log(DeclensionModule.declension(1024, ['пользователь', 'пользователя', 'пользователей']));
console.log(DeclensionModule.declension(1026, ['пользователь', 'пользователя', 'пользователей']));
console.log(DeclensionModule.declension(121, ['пользователь', 'пользователя', 'пользователей']));