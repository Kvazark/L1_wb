function calculateCall(){
    let result1;
    let result2;
    let i = 0;
    const func1 = () => {
        i++;
        func1();
    };
    try {
        func1();
    } catch (e) {
        // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
        console.log(i);
        result1 = i;
    }
    i=0;
    ////фнукция с объявлением доп. перемееннымых (для увеличения каждого рекурсивного вызова, чтобы Call Stack заполнился быстрее)
    const func2 = () => {
        let a = i + 1;
        let b = a + 1;
        let c = b + 1;
        let d = c + 1;
        let e = d + 1;
        i++;
        func2();
    };
    try {
        func2();
    } catch (e) {
        // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
        console.log(i);
        result2 = i;
    }
    let size =     calculateSize(result1, result2)
    document.getElementById('result').textContent = 'Размер коллстека в данном браузере: ' + size+' МБ.';
}
///////функция, которая считает размер колстека
function calculateSize(count1, count2){
    //размер Execution Stack
    let n;
    console.log(count1, count2)
    ////5 - число переменных, 8 - количество байт, которые занимает переменная в памяти(в данном случае число),
    ///count1 и count2 - кол-во вызовов функций
    n = (5*8*count2)/(count1-count2);
    ////считаем размер, беря расчёты из 1-го случая, когда нет объявления переменых
    /////если бы были расчёты из 2-го случая, то переменная size считалась бы так: size = (n+5*8)*count2
    let size = n*count1;
    return (size/(1024*1024)).toFixed(2);
}

//////////Размер стэка в разных браузерах:
//Chrome -  0.95 Мб
//Firefox - 1.65 Мб
//Opera -  0.95 Мб
//Safari - 4 МБ