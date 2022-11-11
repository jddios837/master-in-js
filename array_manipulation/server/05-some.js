const numbers = [1,2,3,4,5];

let rta = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);

const rta2 = numbers.some(item => item % 2 === 0);
console.log(rta2);

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 9),
    endDate: new Date(2021, 1, 1, 9, 30),
};

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const rta3 = dates.some(date => areIntervalsOverlapping(
    { start: date.startDate, end: date.endDate },
    { start: newAppointment.startDate, end: newAppointment.endDate }
));

console.log('rta3 ', rta3);