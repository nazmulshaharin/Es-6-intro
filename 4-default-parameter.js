//if you want default value

function add(numb1, numb2 = 50){
  const total = numb1 + numb2;
  return total
}

const numberValue = add(10);
console.log(numberValue);