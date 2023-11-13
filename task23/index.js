
function difficultyPasswordCheck(password){
    if (password.length < 8) {
        document.getElementById('message').style.color = 'red';
        return "Слабый пароль. Длина пароля должна быть не менее 8 символов.";
    }

    // Проверка наличия различных типов символов
    var hasLowerCase = /[a-z]/.test(password);
    var hasUpperCase = /[A-Z]/.test(password);
    var hasNumbers = /[0-9]/.test(password);
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    if (!hasLowerCase || !hasUpperCase || !hasNumbers || !specialCharacters) {
        let mes = 'Слабый пароль.';
        let k =0;
        document.getElementById('message').style.color = 'orange';
        if(!hasLowerCase || !hasUpperCase) {
            mes += 'Используйте символы разных регистров (A-Z, a-z)';
            k+=1;
        }
        if(!specialCharacters && k===1){
            mes += ', а также специальные символы';
            k+=1;
        }else if(!specialCharacters && k===0){
            mes += ' Используйте специальные символы';
            k+=1;
        }
        if(!hasNumbers && (k===1 || k===2)) {
            mes += ' и добавьте цифры (0-9)';
        }else if(!hasNumbers && k===0) mes += ' Добавьте цифры (0-9).';
        return mes;
    }

    // Все условия выполняются, пароль считается сильным
    document.getElementById('message').style.color = '#2dcb01';
    return "Сильный пароль!";
}
var input = document.getElementById('input-password');
input.addEventListener("input", function() {
    var pas = document.getElementById('input-password').value;
    var message = difficultyPasswordCheck(pas);
    document.getElementById('message').textContent = message;
});
/////запрет пробелов
input.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
    }
});