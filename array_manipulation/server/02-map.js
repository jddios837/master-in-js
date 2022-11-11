const letters = ['a', 'b', 'c', 'd'];

let newArray = [];
for (let i = 0; i < letters.length; i++) {
    newArray.push(letters[i] + '++');
}

console.log('Original ', letters);
console.log('new forEch ', newArray);
console.log('new map', letters.map(e => e + '++'));

const products = [{
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 1620,
        stock: 20
    }];

function addNewAttr(array) {
    return array.map(item => {
    return {
        ...item,
        taxes: Math.trunc(item.price * 0.19)
    }});
}

console.log('Original ', products);
console.log(addNewAttr(products));
console.log('Original ', products);

const rta2 = products.map(e => {
    e.tax = 0.19;
    return e;
});

console.log('Rta 2', rta2);
console.log('Original ', products);