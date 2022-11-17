// Clousures

// IIFE (immediately invoke function expression)
(function(){
    let color = 'green';
    function printColor() {
        console.log(color)
    }
    printColor()
})();

// Functions that returns functions
// function makeColorPrinter(color) {
//     let colorMessage = `The color is ${color}`;
//
//     return function() {
//         console.log(colorMessage);
//     }
// }
//
// let greenColorPrinter = makeColorPrinter('green');
// console.log(greenColorPrinter());

// Private Vars
// const counter = {
//     count: 3
// };
// console.log(counter.count);

function makeCounter(n) {
    let count = n;

    return {
        increase: function (){
            count++;
        },
        decrease: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    }
}

let counter = makeCounter(7);
counter.increase();
counter.increase();
console.log(counter.getCount());