function recursiveTraversal(node, action) {
    action(node); // Выполнять определенное действие с текущим узлом
    node = node.firstChild; // Получить первый дочерний узел
    while (node) {
        recursiveTraversal(node, action); // Рекурсивный вызов для каждого дочернего узла
        node = node.nextSibling; // Получить следующий узел на том же уровне
    }
}

function fun1() {
    const ulElement = document.querySelector("ul");
    recursiveTraversal(ulElement, function (element) {
        if (element.classList) {
            element.classList.add("active");
        } else {
            element.className += " active";
        }

    })
}
function fun2(){
    const ulElement = document.getElementById("li-3");
    recursiveTraversal(ulElement, function (element) {
        element.className += "no-active";
        console.log(element);
        if (element.tagName) {
            console.log(element.tagName);
        }
    })
}
