const pets =['cat', 'dog', 'bat'];

console.log(pets.includes('cat') )
console.log(pets.includes('dog'));

const obj = {
    name: "juan",
    apellido: "gomez"
}
const obj2 = {
    ...obj,
    age: 22
}
console.log('Obj', obj);
console.log('Obj 2', obj2);