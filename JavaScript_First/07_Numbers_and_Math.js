let score = 400
console.log(score);
score = new Number(600)
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anothernum = 1123.8966
console.log(anothernum.toPrecision(3));

const num1 = 1000000

console.log(num1.toLocaleString('en-US'));

console.log(num1.toLocaleString('en-IN'));


// Mathematical Operations

// console.log(Math);
// console.log(Math.PI.toFixed(10));
// console.log(Math.abs(-100));
// console.log(Math.round(1.5));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.9));
// console.log(Math.max(1,2,3,4,5,6,7,8,9));
// console.log(Math.min(1,2,3,4,5,6,7,8,9));
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const max = 10
const min = 5

console.log(Math.floor((Math.random() * (max - min + 1)))+min )
