//
// function convertJSON(json){
//
//     // if (json.length === 0) {
//     //     return null;
//     // }
//     //
//     // // Создаем первый узел списка
//     // var head = {
//     //     value: json[0],
//     //     next: null
//     // };
//     //
//     // var current = head;
//     //
//     // // Проходимся по оставшимся элементам JSON и добавляем их в связный список
//     // for (var i = 1; i < json.length; i++) {
//     //     var newNode = {
//     //         value: json[i],
//     //         next: null
//     //     };
//     //
//     //     current.next = newNode;
//     //     current = newNode;
//     // }
//     //
//     // return head;
//     let head = null;
//     let previousNode = null;
//
//     for (let i = 0; i < json.length; i++) {
//         const currentNode = { data: json[i], next: null };
//
//         if (i === 0) {
//             head = currentNode;
//         }
//
//         if (previousNode) {
//             previousNode.next = currentNode;
//         }
//
//         previousNode = currentNode;
//     }
//
//     return head;
// }
// let JSON =  [{
//         id:"124512",
//         name:"Anna"
//     }, {
//         id:"34346",
//         name:"Jeck"
//     },
//     {
//         id:"75645",
//         name:"Sem"
//     },
//     {
//         id:"7457547345",
//         name:"Sewdadm"
//     },
//     {
//         id:"74326",
//         name:"Sedasdwm"
//     },    {
//         id:"74326",
//         name:"Sedsm"
//     },]
// console.log(convertJSON(JSON))