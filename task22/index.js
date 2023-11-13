function calculate(){
    let countCall = 1;

    function recursionFunction() {
        // Увеличиваем счетчик вызовов на 1
        countCall++;
        // Вызваем функцию повторно
        document.write(recursionFunction());
    }
    try {
        // Вызываем рекурсию
        recursionFunction();
    }catch (e){
        console.log(e)
        // Выводим количество рекурсивных вызовов и вычитаем 1 инициализирующий вызов
        document.getElementById('result').textContent = 'Количесвтво : ' + countCall+'.';
        console.log(countCall);
    }
}