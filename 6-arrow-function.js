function add(num1, num2){
  return num1 + num2;
}
console.log(add(5, 3));
// function expression(anonymous)

const add2 = function(num1, num2){
  return num1 + num2;
}
const sum2 = add2(16, 20);

//arrow function
const add3 = (num1, num2) => num1 + num2;
const sum3 = add3(40, 20);
//
console.log(sum2, sum3);