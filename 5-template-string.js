const priya = 'Asif Akbar';
const meye = 'meye tomi ki dokkho cino';
const kobita = `tmi ki amar moner kobita`;
const multiLine = 'this is my first line. \n' +
'this is my second line. \n' +
'this is my third line';
const newMultiLine = `this is my first line.
this is my first line.
this is my first line.`

const friends = ['babul', 'kabul', 'sabul'];
const friendCount = 5;
const old = '<h3 class="friend-name">friend-3</h3>'
const newSystem = `<h3 class="friend-name">friend-${friendCount}</h3>`;
const newSystem2 = `<h3 class="friend-name">friend-${friends.length}</h3>`

//
const first = 'mamun';
const last = 'Hasan';
const fullNew = `This person name is: ${first} ${last}. Has money ${friends.length * 500}. He lives in Dhaka.`;
console.log(fullNew);

console.log(newSystem);
console.log(newSystem2);
console.log(multiLine);
//console.log(newMultiLine);