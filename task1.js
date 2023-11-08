function method1(line){
    line = line.replaceAll(' ', '');
    const lastIndex = line.length - 1;
    for (let i = 0; i < line.length / 2; i++) {
        if (line[i] !== line[lastIndex - i]) {
            return false;
        }
    }
    return true;
}
function method2(line){
    let reverseLine = line.split('').reverse().join('');
    return line.replaceAll(' ', '') === reverseLine.replaceAll(' ', '');
}
console.log(method1('аргентина манит негра'));
console.log(method2('аргентина манит негра'));