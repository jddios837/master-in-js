const juan = {
    name: "Juanito",
    approvedCourses: ["Curso 1","Curso 2"],
    caracteristicas: {
        age: 18,
        colorCabello: 'Negro',
        gustos: {
            musica: ['rock', 'punk', 'ska'],
            peliculas: ['drama', 'horros', 'comedia'],
        },
    },
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// function isObject(element) {
//     return typeof element == "object";
// }

function isArray(element) {
    return Array.isArray(element);
}

console.log(Object.getOwnPropertyDescriptor(juan));

function deepFreeze(obj) {
    for (const objKey in obj) {
        if (typeof obj[objKey] === "object") {
            deepFreeze(Object.freeze(obj[objKey]));
        }
    }

    return Object.freeze(obj[objKey]);
}
const newFreezeObject = deepFreeze(juan);
console.log(newFreezeObject);
console.log("---------------------- AFTER FREEZE");
console.log(Object.getOwnPropertyDescriptor(juan));
console.log("Done!");

function deepFreeze(obj) {

    for (item in obj)
        if(typeof obj[item] === 'object')
            deepFreeze(Object.freeze(obj[item]))
    return Object.freeze(obj)
}