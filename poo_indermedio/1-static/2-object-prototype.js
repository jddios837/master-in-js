const juan = {
    name: "Juan",
    age: 18,
    approvedCourses: ["Course 1"],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));


// Crear una nueva propiedad
Object.defineProperty(juan, "pruebaNASA", {
    value: "extraterrestre",
    enumerable: true,
    writable: true,
    configurable: true
})
console.log(juan);

console.log(Object.getOwnPropertyDescriptors(juan));

