
///////Не будет работать в внеобозримой среде, потому что объект Image встроен в браузерный JavaScript, но не в Node.js. Чтобы использовать
// в Node.js необходима будет external библиотека, такая как node-fetch или axios, для обработки изображений в Node.js.
function imageProcessing(url){

    return new Promise((resolve, reject) =>{
        const image = new Image();
        image.onload=()=>{
            resolve(image)
        }
        image.onerror=()=>{
            reject(new Error('Error!'));
        }
        image.src=url;

    });
}
let urlImg="https://images.wallpaperscraft.ru/image/single/kot_vzgliad_mordochka_72638_1920x1285.jpg";
imageProcessing(urlImg)
    .then(()=>{
        console.log('Изображение загружено')
    }).catch((error)=>{
        console.log('Error: '+ error)
})
