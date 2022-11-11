const words = ["spray", "limit", "elite", "exuberant"];
let object = {
    name: "Juan",
    apellido: "Gomez",
    edad: 34
}
let text = "hola a todos";
for (const o of text) {
    console.log(o);
}

// console.log('For in----------------------------------')
// for (const wordsKey in words) {
//     console.log(`For in array | Key ${wordsKey} and Value ${words[wordsKey]}`);
// }
// console.log('For in Object Properties------------------');
// for (const key in object) {
//     console.log(`For in object| Key ${key} and Value ${object[key]}`);
// }
//
// console.log('For of---------------------------------')
// for (const word of words) {
//     console.log(`For of array | Key ${word} and Value ${words[word]}`);
// }
// ERROR
// for (const key of object) {
//     console.log(`For of object | Key ${key} and Value ${object[key]}`);
// }