const obj1 = {
    a: "a",
    b: "b",
    c: {
        a: "test c"
    }
}

const obj2 = {};
for(prop in obj1){
    obj2[prop] = obj1[prop];
}
const obj3 = Object.create({}, obj1);
console.log('Hola')