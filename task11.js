function externalFunction(){
    let clock = 0;
    function internalFunction(){
        clock++;
        console.log(`The clock struck ${clock} o'clock!`)
    }
    return internalFunction;

}
const result = externalFunction();
result();
result();

