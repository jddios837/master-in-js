const prueba = [1,2,3,4,5];

function multiplyElements(arr) {
    let newArr = [];
    // arr.forEach(function (e,i,array) {
    //     newArr.push(e * 2);
    // });
    return arr.map(e => e * 2);
}

console.log(multiplyElements(prueba));