const student = {roll: 101, name: 'mofiz', job: 'intern'};
student.name = 'Shaharin';
student.roll = 05;
console.log(student);

//
const numbers = [10, 20, 15, 9, 25, 35];
numbers.push(28);
numbers[1] = 45;
//console.log(numbers);

for(let i = 0; i<numbers.length; i++){
  const number = numbers[i];
  console.log(number);
}