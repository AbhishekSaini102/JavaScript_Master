// Truthy and falsy Values

// 1. Falsy values: false undefined, null, 0, -0, '', "", NaN, BigInt(0n)

// 2. Truthy values: NOT falsy values "0", " ", [], {} "false", "true", "null", "undefined", "0n, function(){}

// const userEmail = "abs@absmail.ai"
// const userEmail = "";

// const userEmail = [];

// if (userEmail) {
//   console.log("Email is valid");
// } else {
//   console.log("Email is not valid");
// }

//checking the length of the array
// if(userEmail.length === 0){
//     console.log("Array is empty")
// }


// // Example object
// const person = {
//   firstName: "Abhishek",
//   lastName: "Saini",
//   age: 24,
//   eyeColor: "blue"
// };

// // Get the keys
// const keys = Object.keys(person);
// console.log(keys); // ["firstName", "lastName", "age", "eyeColor"]


// const myObject = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };

// const entries = Object.entries(myObject);
// entries.forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// const person = {
//   firstName: "Abhishek",
//   lastName: "Saini",
//   age: 24,
//   eyeColor: "blue",
// };

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// const person = {
//   firstName: "Abhishek",
//   lastName: "Saini",
//   age: 24,
//   eyeColor: "blue",
// };

// const keyValuePairs = Object.entries(person);
// console.log(keyValuePairs);


// const person = {
//   firstName: "Abhishek",
//   lastName: "Saini",
//   age: 24,
//   eyeColor: "blue",
// };

// const keyValueArray = Object.entries(person).map(([key, value]) => ({key,value,}));
// console.log(keyValueArray);

// const emptyobject = {};

// if (Object.keys(emptyobject).length === 0) {
//   console.log("Object is empty");
// }


// Nullish Coalescing Operator (??)
// let val1;
// val1 = 10 ?? 20;
// console.log(val1); // 10

// let val2;
// val2 = null ?? 20;
// console.log(val2); // 20

// let val3;
// val3 = undefined ?? 20;
// console.log(val3); // 20

// let val4;
// val4 = 0 ?? 20;
// console.log(val4); // 0

// let val5;
// val5 = "" ?? 20;
// console.log(val5); // ""

// let val6;
// val6 = NaN ?? 20;
// console.log(val6); // NaN

// let val7;
// val7 = false ?? 20;
// console.log(val7); // false

// let val8;
// val8 = true ?? 20;
// console.log(val8); // true

// let val9;
// val9 = "Hello" ?? 20;
// console.log(val9); // Hello

// let val10;
// val10 = [] ?? 20;
// console.log(val10); // []

// let val11;
// val11 = {} ?? 20;
// console.log(val11); // {}

// let val12;
// val12 = null ?? 10 ?? 20;
// console.log(val12); // 10

// let val12;
// val12 = null ?? false ?? true;
// console.log(val12); // 10

// let val13;
// val13 = null ?? false ;
// console.log(val13); // 10

// let val14;
// val14 = null ?? true;
// console.log(val14); // 10

// Terniary Operator
// Condition ? expression1 : expression2 or Condition ? expression1 : Condition ? expression2 : expression3

// Condition ? true : false


// const age = 24;
// const isAdult = age >= 18 ? "Adult" : "Not Adult";
// console.log(isAdult);

// const age = 24;
// let isAdult;
// if (age >= 18) {
//   isAdult = "Adult";
// } else {
//   isAdult = "Not Adult";
// }
// console.log(isAdult);

// const teaPrice = 101
// teaPrice <= 100 ? console.log("I will buy the tea") : console.log("I will not buy the tea");
