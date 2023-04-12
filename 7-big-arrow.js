const add = (num1, num2) => num1 + num2;
const sum = add(20, 30);
console.log(sum);

//

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const mul = multiply(5, 3, 2);
console.log(mul);

//
const now = (c, d, e) => c * d * e;
const tday = now(2, 3, 4);
console.log(tday);

//
const tenTimes = (num) => num * 10;
const outPut = tenTimes(30);
console.log(outPut);

//
const fiveTimes = num => num * 5;
const next = fiveTimes(10);
console.log(next);

//
const getName = () => 'Nazmul Shaharin';
const name = getName();
console.log(name);

//multiLine করার জন্য
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  const outPut = result * 5;
  return outPut;
}
const total = doMath(12, 5);
console.log(total);