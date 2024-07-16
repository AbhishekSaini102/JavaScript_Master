const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = myNumbers.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }, 0); //1, 2 (0 just serves the starting value)
// console.log(sum); // 55

// const newNumbers = myNumbers.map( (num) => num + 10)
// console.log(newNumbers);

// const newNumbers = myNumbers.forEach( (num) => num + 10)
// console.log(newNumbers); // undefined

// const newNumber = []

// myNumbers.forEach( (num) => {
//     newNumber.push(num + 10);
// }
// )
// console.log(newNumber); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


const NewValues = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 5)
  .filter((num) => num > 50)
  .map((num) => num + 20)

console.log(NewValues); // [15, 25, 35, 45, 55, 65, 75, 85, 95, 105]


// const transformedValues = myNumbers
//   .map((num) => num * 10)
//   .map((num) => num + 5)
//   .filter((num) => num > 50)
//   .map((num) => num + 5);

// // Now let's use forEach to add 10 to each value in the transformed array
// const finalValues = [];
// transformedValues.forEach((num) => {
//   finalValues.push(num + 10);
// });

// console.log(finalValues); // [65, 75, 85, 95, 105]
