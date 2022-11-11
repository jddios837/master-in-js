const items = ['a', 'b', 'c', 'a', 'a', 'c'];
// histograma
const rta = items.reduce((obj, item) => {
    obj[item] = !obj[item] ? 1 : obj[item] + 1;
    return obj;
}, {});

for(let letter in rta) {
    console.log(`De la letra ${letter} hay un total de ${rta[letter]}`);
}

console.log(rta);

const numbers = [1, 1, 2, 3, 4, 5, 6,6,7,7,8,9,9,10];

const rta1 = numbers.reduce((obj, num) => {
    if (num >= 1 && num <= 5) {
        let rang = "1-5";
        obj[rang] = !obj[rang] ? 1 : obj[rang] + 1;
    }

    if (num >= 6 && num <= 8) {
        let rang = "6-8";
        obj[rang] = !obj[rang] ? 1 : obj[rang] + 1;
    }

    if (num >= 9 && num <= 10) {
        let rang = "9-10";
        obj[rang] = !obj[rang] ? 1 : obj[rang] + 1;
    }

    return obj;
}, {});

console.log('rta1', rta1)