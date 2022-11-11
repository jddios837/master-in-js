const words = ["spray", "Limit", "elite", "exuberant"];

const newArray = [];
for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length >= 6) newArray.push(item);
}

console.log('newArray', newArray);
console.log('original', words);

const rta = words.filter(word => word.length >= 6);
console.log('Rta ', rta);
console.log('original ', words)

const search = (query) => {
    return words.filter(word => {
        return word.toLowerCase().includes(query.toLowerCase());
    })
}

console.log("Busqueda", search("li"));