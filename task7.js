function oneF(){
    let l=0;
    for(let i=0; i < 2034237659; i++){
        l = i;
    }
    console.log(l);
}

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

function functionCall(index) {

    if (index >= functions.length) {
        return;
    }
    console.log('Функция номер '+ (index+1)+':')
    let currentFunction = functions[index];
    currentFunction();
    functionCall(index + 1);
}

functionCall(0);