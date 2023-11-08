function method1(number){
    let strange = false;
    let arrDivisors =[];
    for(let i =1; i < number/2+1; i++){
        if (number%i===0) arrDivisors.push(i);
    }
    let sum =0;
    arrDivisors.forEach((item)=>{
        sum+=item
    });

    if(number===sum) strange = true;
    return strange;
}
console.log(method1(6));