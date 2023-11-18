function parseStringToJSON(str){
    ///определяет текущую позицию в строке, начиная с 0.
    // После обработки каждого символа, значение index увеличивается на единицу для перехода к следующему символу.
    let index = 0;
    ///Функция разбирает значение JSON в зависимости от первого символа строки.
    // Если символ - это "t", "f" или "n", значит это "true", "false" или "null" соответственно.
    // Если символ - это двойная кавычка (") значит это строка.
    // Если символ - это "[" значит это массив.
    // Если символ - это "{" значит это объект.
    // В остальных случаях, это число.
    function parseValue() {
        const char = str[index];
        if (char === 't') {
            index += 4;
            return true;
        } else if (char === 'f') {
            index += 5;
            return false;
        } else if (char === 'n') {
            index += 4;
            return null;
        } else if (char === '"') {
            return parseString();
        } else if (char === '[') {
            return parseArray();
        } else if (char === '{') {
            return parseObject();
        } else {
            return parseNumber();
        }
    }

    function parseString() {
        let start = ++index;
        let end = str.indexOf('"', start);
        let result = str.slice(start, end);
        index = end + 1;
        return result;
    }

    function parseNumber() {
        const start = index;
        while ('0123456789+-.eE'.includes(str[index])) {
            index++;
        }
        return Number(str.slice(start, index));
    }

    function parseArray() {
        let result = [];
        index++; // пропуск '['
        while (str[index] !== ']') {
            result.push(parseValue());
            if (str[index] === ',') {
                index++;
            }
        }
        index++; // пропуск ']'
        return result;
    }

    function parseObject() {
        let result = {};
        index++; // пропуск '{'
        while (str[index] !== '}') {
            const key = parseString();
            index++; // пропуск ':'
            const value = parseValue();
            result[key] = value;
            if (str[index] === ',') {
                index++;
            }
        }
        index++; // пропуск '}'
        return result;
    }

    return parseValue();
}
let str = '[{"id":"124512","name":"Anna"},{"id":"34346","name":"Jeck"},{"id":"75645","name":"Sem"},{"id":"7457547345","name":"Sewdadm"},{"id":"74326","name":"Sedasdwm"},{"id":"74326","name":"Sedsm"}]'
console.log(parseStringToJSON(str))