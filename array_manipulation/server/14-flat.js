const matriz = [
    [0,1,[2,2.1,2.2]],
    [4,5,6],
    [7,8,9]
];

console.log(matriz.flat(2));

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute", ["hola", "uno"]] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

console.log(users.flatMap(u => u.attributes));

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

console.log(Object.values(calendars).flatMap(e => e.map(item => item.startDate)));

const listOfText = [
    "  Beautiful   is   better than   ugly  ",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]

console.log(listOfText.map(e => e.split(' ')).flat().length)
console.log(listOfText.flatMap(e => { return e.trim().split(' ').filter(e => e !== '')}).length);

const numbers = [34,22,22,55,44,66];
console.log(numbers.sort((a,b) => b - a));
