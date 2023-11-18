function convertJSONtoString(json){
    if (typeof json === 'object' && json !== null) {
        if (Array.isArray(json)) {
            const arrayValues = json.map((item) => convertJSONtoString(item));
            return `[${arrayValues.join(',')}]`;
        } else {
            const objectProperties = Object.keys(json).map((key) => {
                const value = convertJSONtoString(json[key]);
                return `"${key}":${value}`;
            });
            return `{${objectProperties.join(',')}}`;
        }
    } else {
        if (typeof json === 'string') {
            return `"${json}"`;
        } else {
            return String(json);
        }
    }
}
let example =  [{
    id:"124512",
    name:"Anna"
}, {
    id:"34346",
    name:"Jeck"
},
    {
        id:"75645",
        name:"Sem"
    },
    {
        id:"7457547345",
        name:"Sewdadm"
    },
    {
        id:"74326",
        name:"Sedasdwm"
    },    {
        id:"74326",
        name:"Sedsm"
    },]
console.log(convertJSONtoString(example));