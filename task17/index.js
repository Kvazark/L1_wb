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
    const { value } = e.target;
    ymaps.geocode(value, { results: 7 }).then((res) => {
        const suggestions = [];
        res.geoObjects.each((geoObject) => {
            const address = geoObject.getAddressLine();
            suggestions.push(address);
        });
        displayAddressSuggestions(suggestions);
    });
}

// Функция для отображения предложений адресов в выпадающем списке
function displayAddressSuggestions(suggestions) {
    searchResults.innerHTML = '';
    suggestions.forEach((address) => {
        const div = document.createElement("div");
            div.className = 'address-block'
        div.textContent = address;
        div.addEventListener('click', () => {
            searchInput.value = address; // Заполняем поле ввода выбранным адресом
            searchResults.innerHTML = ''; // Очищаем список после выбора адреса
        });
        searchResults.appendChild(div);
    });
}
// Указываем, что нужно ждать 500 мс, прежде чем запустить обработчик:
const debouncedHandle = debounce(handleInput, 1000);
// Передаём новую debounced-функцию в addEventListener:
searchInput.addEventListener('input', debouncedHandle)

const button = document.querySelector('button')
button.addEventListener('click', (event) => {
    event.preventDefault()
})


