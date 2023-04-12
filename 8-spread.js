const numbers = [15, 25, 35, 40]
//console.log(numbers);
//console.log(...numbers);

const max = Math.max(23, 99, 65);
const maxArray = Math.max(...numbers);
console.log(maxArray);

//
//const numbers2 = numbers;
//numbers.push(60);
//console.log(numbers2);

//
numbers.push(600);
const numbers3 = [75, ...numbers, 50];
console.log(numbers3);