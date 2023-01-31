let userNumber = prompt('Введите число от 1', 0); 
let i = 0;
if (userNumber > 0) { 
	while (i < userNumber) {
		i++;
        if ( i % 4 === 0 ) continue;
        console.log(i); 
		// if (i % 4 === 0) {
		// 	continue;
		// } else if (i % 4 !== 0) {
		// 	console.log(i);
		// }
	}
} else {
	alert('Ошибка! Некорректные данные!');
	console.log('Ошибк');
}