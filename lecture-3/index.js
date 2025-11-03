// ------------ First Topic ------------
let name = "Hassan";
let age = 25;
let isStudent = true;
let height = 123456787654323456776542345652345654567890n;
let weight = null;
let address;
let id = Symbol("id");

console.log('value', name, 'type', typeof name);
console.log('value', age, 'type', typeof age);
console.log('value', isStudent, 'type', typeof isStudent);
console.log('value', height, 'type', typeof height);
console.log('value', weight, 'type', typeof weight);
console.log('value', address, 'type', typeof address);
console.log('value', id.toString(), 'type', typeof id);

console.log('-------------- Second Topic --------------------');
let num1 = 10;
let num2 = 3;
console.log('num1:', num1, 'num2:', num2);
console.log("JavaScript copies the value, not the variable itself");

console.log('-------------- Third Topic --------------------');

let nam = prompt('Enter your name:');
let ag = prompt('Enter your age:');
ag = Number(ag);
let isStu = confirm('Are you a student?');
let favorite  = prompt('Enter your favorite number:');
favorite = Number(favorite);
let nickname = prompt('Enter your nickname:');

console.log('Name', nam, 'type', typeof nam);
console.log('Age', ag, 'type', typeof ag);
console.log('Is Student', isStu, 'type', typeof isStu);
console.log('Favorite number', favorite, 'type', typeof favorite);
console.log('Nickname', nickname, 'type', typeof nickname);