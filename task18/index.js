function addValue(num)
{
    return new Array((num * 1024) + 1).join('a')
}
function calculateLocalStorageSize(){
    window.localStorage.clear()
    let k = 0;
    while(true) {
        try {
            //Заполняем хранилище
            window.localStorage.setItem(`${k}`, addValue(k));
        } catch (e) {
            //При переполнении ловим ошибку, выходим из цикла
            break
        }
        k++;
    }

    //Считаем размер всех полей localStorage
    let totalSize = 0
    for (let item in localStorage) {
        //если элемент хранилища установлен
        if (localStorage.hasOwnProperty(item)) {
            //Внутренний формат для строк в JavaScript – всегда UTF-16, т.е. под каждый символ отводится ровно два байта.
            //Складываем длинну ключа и значения, получаем объем в байтах.
            let itemSize = ((localStorage[item].length + item.length) * 2);
            totalSize += itemSize;
        }
    };
    //Находим общий объем localStorage в Mб
    return (totalSize / (1024*1024)).toFixed(2);
}

document.getElementById('calculateBtn').addEventListener('click', function() {
    var localStorageSize = calculateLocalStorageSize();
    document.getElementById('result').textContent = 'Максимальный объем данных localStorage: ' + localStorageSize + ' MБ';
    window.localStorage.clear()
});