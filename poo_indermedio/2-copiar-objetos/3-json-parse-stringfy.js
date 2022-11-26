const obj1 = {
    a: "a",
    b: "b",
    c: {
        a: "test c"
    }
}

const stringParsing = JSON.stringify(obj1);
const obj2 = JSON.parse(stringParsing);

console.log('Hola');