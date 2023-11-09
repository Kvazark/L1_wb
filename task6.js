function doubleSorting(array){
    array.sort(function(x,y){
        if(x.age < y.age) return -1;
        if(x.age>y.age) return 1;
        if(x.age===y.age){
                if(x.name < y.name) return -1;
                if(x.name>y.name) return 1;
        }
        return x.name-y.name;
    })
    return array;
}

let array = [{ name: 'Alice', age: 34 },{ name: 'John', age: 25 },{ name: 'Alice', age: 25 },{ name: 'Milly', age: 21 },
    { name: 'Milly', age: 23 },{ name: 'Frenk', age: 27 },{ name: 'Bob', age: 25 }];
console.log(doubleSorting(array));