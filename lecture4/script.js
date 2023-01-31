const userData = {
   firstName: 'Alex',
   secondName: 'Filippov',
   cars: ['2107', '21123'],
// свойство: значение,
// ключ: значение,
}

const arr = ['2107', '21123'];
let arrLikeObj = {
    0: '2107',
    1: '21123',
}

// console.log(`Пользователь ${userData.firstName} ${userData.secondName} зарегистрировался на сайте.`);

// console.log(typeof arr);
// console.log(typeof userData);
// console.log(typeof null);


// console.log(Array.isArray(arr)); // true
// console.log(Array.isArray(userData)); // false
// console.log(Array.isArray(null)); // false

// // Массив дат
// let dates = ["1-01-20", "1-09-20", "12-09-20"];

// // Объект событий
// let events = {
//     "1-01-20": {
//         name: "Новый год",
//         weekday: "Среда",
//     },
//     "12-09-20": {
//         name: "День программиста",
//         weekday: "Суббота",
//     },
//     "1-09-20": {
//         name: "День знаний",
//         weekday: "Суббота",
//     },
// }

// events["1-01-20"]; // {...}
// events[dates[2]]; // events["12-09-20"];
// events[dates[1]]; // undefined | events["1-09-20"];

// let arr = ["a", "b", "c", "d"];

// let firstRez = arr.slice(1,3);
// console.log(firstRez);

// let secondRez = arr.slice(-2);
// console.log(secondRez);

// let thirdRez = arr.slice(2, arr.length);
// console.log(thirdRez);

let dlAcademyTeacher = ["Alex", "Yan", "Irina", "Egor", "Denis"];

// for (let i = 0; i < dlAcademyTeacher.length; i++ ){
//     console.log(dlAcademyTeacher[i]);
// }

// dlAcademyTeacher.forEach((teacher) => {
//     console.log(`В DL Academy есть преподаватель с именем: ${teacher}`);
// })

