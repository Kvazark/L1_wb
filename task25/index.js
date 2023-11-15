function addElement(){
    let parent = document.getElementById('container');
    let newElem = document.createElement('div');
    /////первый способ
    newElem.style.cssText = 'width: 5rem; height: 5rem; background-color:green;';
    /////второй способ
    newElem.style.margin = '2rem 10rem'
    parent.append(newElem);
}
addElement();