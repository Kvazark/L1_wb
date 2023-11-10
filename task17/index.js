const addessList = [
    'address1',
    'address2',
    'address3',
    'address4',
    'address5',
    'address6'
]

// В функции contains мы будем проверять,
// содержится ли пользовательский запрос
// в каком-либо из названий:
function contains(query) {
    return addessList.filter(title =>
        title.toLowerCase().includes(query.toLowerCase()))
}
// Мок-объект сервера будет содержать метод search:
const server = {
    search(query) {
        // Этот метод будет возвращать промис,
        // таким образом мы будем эмулировать «асинхронность»,
        // как будто мы «сходили на сервер, он подумал и ответил».
        return new Promise(resolve => {
            setTimeout(() => resolve({
                // В качестве ответа будем отправлять объект,
                // значением поля list которого
                // будет наш отфильтрованный массив
                list: query ? contains(query) : []
            }), 100)
        })
    }
}
// var ymaps = require('yandex-maps');
const searchForm = document.getElementById('search')
const searchInput = searchForm.querySelector('[type="search"]')
const searchResults = document.querySelector('.search-results')

// Аргументы функции:
// - функция, которую надо «откладывать»;
// - интервал времени, спустя которое функцию следует вызывать
function debounce(callee, timeoutMs) {
    // Как результат возвращаем другую функцию.
    // Это нужно, чтобы мы могли не менять другие части кода,
    return function perform(...args) {
        // В переменной previousCall храниться временная метка предыдущего вызова
        let previousCall = this.lastCall
        // в переменной текущего вызова — временная метка нынешнего момента
        this.lastCall = Date.now()

        // это нужно, чтобы потом сравнить, когда была функция вызвана в этот раз и в предыдущий
        // Если разница между вызовами меньше, чем указанный интервал, то очищаем таймаут
        if (previousCall && ((this.lastCall-previousCall) <= timeoutMs)) {
            clearTimeout(this.lastCallTimer)
        }

        this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
        // Если таймаут был очищен, вызова не произойдёт
        // если он очищен не был, то callee вызовется.
    }
}

function handleInput(e) {
    const {value} = e.target

    server.search(value).then(function (response) {
        const {list} = response

        const html = list.reduce((markup, item) => {
            return `${markup}<li>${item}</li>`
        }, ``)

        searchResults.innerHTML = html
    })
}
// Указываем, что нужно ждать 500 мс, прежде чем запустить обработчик:
const debouncedHandle = debounce(handleInput, 500);
// Передаём новую debounced-функцию в addEventListener:
searchInput.addEventListener('input', debouncedHandle)

const button = document.querySelector('button')
button.addEventListener('click', (event) => {
    event.preventDefault()
    const printPizzaList = addessList.join('\n');
    alert(`Попробуй найти addess:\n${printPizzaList}`)
})
// document.addEventListener('DOMContentLoaded', function() {
//     ymaps.geocode('Москва, Красная площадь')
//         .then(function (res) {
//             console.log(res.geoObjects.get(0).geometry.getCoordinates());
//         });
// });


