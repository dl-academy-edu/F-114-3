// let i = 5;
// while (i>0) {
//     console.log(i);
//     i--;
// }

// var & let difference
// let a = 5;
// let a = 10;

// var b = 5;
// var b = 10;

// let count= 10;
// for (let i = 0; i < 9; i++) {
//     count+= 5;
//     console.log(count);
// }
  
// let i = 11;
// if (i === 11 && i === 10) {
//     // code
//     // code
//     // code
//     // code
// } else {
//     // code
//     // code
//     // code
// }

// i === 11 ? i = 10 : 10;
// if ( i === 11 ) {
//     i = 10;
// } else {
//     i = 9;
// }

// let bankBalance = 2500;
// let phoneOne = 999;
// let phoneTwo = 1099;
// let phoneThree = 2099;
// if (phoneOne  < bankBalance) {
//   console.log("Я покупаю телефон");
// } else if (phoneTwo  < bankBalance){
//   console.log("Я покупаю второй телефон");
// } else if (phoneThree < bankBalance){
//   console.log("Я покупаю третий телефон");
// }



// let i = '5';
// switch(i) {
//     case '5': {
//         console.log(`Здесь была переменная ${i}=5`);
//     }
//     case '10': {
//         console.log(`Здесь была переменная ${i}=10`);
//     }
//     case '15': {
//         console.log('Здесь была переменная ' + i + '=15');
//     }
//     case '20': {
//         console.log('Здесь была переменная', i, '=20');
//     }
// }

// let i = 10;
// if( i === 10 ) console.log(10);

// for ( let i = 0; i<10; i++ ) {
//     if ( i === 5 ) {
//         console.log('break');
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) console.log('break');
//     break; // Если значение переменной i будет равно 5, завершить итерацию и выйти из цикла
//     console.log(i);
//   }
  

// dlac@demy 
// dl-ac@demy


// while (условие) {
//     тело цикла
// }

// let i = 0;
// while ( i < 10 ) {
//     console.log(i);
//     i++;
// }

// prompt вернет String
// Цикл должен спрашивать пока пользователь не введет число больше 100

// let userNumber = prompt(); 
// while(1) {
//     if ( +userNumber > 100 ) break;
//     userNumber = prompt();
// }

let num;
do {
  num = prompt("Введите число больше 100?", 0 );
} while  (num <= 100 )
