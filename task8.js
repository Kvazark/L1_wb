function oneF(){
    let l=0;
    for(let i=0; i < 2034237659; i++){
        l = i;
    }
    console.log(l);
}

////////массив функций
var functions = [
    oneF,
    function() {
        console.log('Hello world!')},
    () => {
        let k = 20;
        for(let i=0; i< 1067785670;i++){
            if(i%3===0 && i < 100) k+=i;
        };
        console.log(k);},
    () => { console.log('JS...'); },
    () => { console.log('is cool!'); },
];

let arrayResult =[];
//////функция, принимающая массив функций и возвращающая новую функцию, которая
////вызывает каждую функцию в этом массиве и возвращает массив результатов
function closureFunction(functions){
    return function (){
        for (let i=0; i < functions.length; i++){
            arrayResult.push(functions[i]());
        }
        return arrayResult;
    }
}
const allFunctions = closureFunction(functions);
const results = allFunctions();
console.log(results);


