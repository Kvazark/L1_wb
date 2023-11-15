function addTemplate(){
    var product = document.getElementById('input').value;
    const list = document.querySelector('.list')
    const template = document.querySelector('#template')

// Клонируем содержимое тега <template>
    const item = template.content.cloneNode(true)

// Находим тег <li> и помещаем текст внутрь
    item.querySelector('li').textContent = product;
    input.value = '';

// Вставляем склонированный контент на страницу
    list.append(item)
}ддд