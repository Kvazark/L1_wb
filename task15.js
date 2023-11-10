
///////Первый способ:
async function getCatsFacts(){
    let response = await fetch('https://catfact.ninja/breeds?limit=1');
    let cat = await response.json();
    return cat;

}
async function getResult(){
    try {
        let result = await getCatsFacts();
        console.log(result);
    } catch (error){
        console.log(error);
    }
}
getResult();
//////////Второй способ:
async function asyncFunction() {
    try {
        const result1 = await asyncOperation1();
        const result2 = await asyncOperation2(result1);
        return result2;
    } catch (error) {
        throw new Error('Async function error: ' + error);
    }
}

function asyncOperation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Result 1');
        }, 1500);
    });
}

function asyncOperation2(input) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Result 2: ' + input);
        }, 1500);
    });
}
asyncFunction()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
