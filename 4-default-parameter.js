//if you want default value

function add(numb1, numb2 = 50){
  const total = numb1 + numb2;
  return total;
}

const numberValue = add(10);
console.log(numberValue);

function number(a, b = 5){
  const z = a + b;
  return z;
}
const now = number(3);
console.log(now);