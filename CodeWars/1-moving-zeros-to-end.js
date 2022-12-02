function moveZeros(arr) {
    let newArray = [];
    let newCeroArray = [];
    arr.map(e => {
        if (e !== 0) newArray.push(e)
        else newCeroArray.push(0);
    })
    return newArray.concat(newCeroArray);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]

// OTHER OPTIONS
// var moveZeros = function (arr) {
//     return [
//         ...(arr.filter(n => n !== 0)),
//         ...(arr.filter(n => n === 0))
//     ];
// }

// var moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }