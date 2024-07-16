// For of Loop

// ["", "", ""]
// [{}, {}, {}]

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const num of array) {
//     console.log(num);
// }

// const greetings = "Hello World";
// for(const greet of greetings) {
//     if(greet === " ") {
//         console.log("Space");
//         continue;
//     }
//     console.log(greet);
// }   // H e l l o   W o r l d

// Map

// const map = new Map();
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("UK", "United Kingdom");
// map.set("FR", "France");
// map.set("IN", "India"); // This will not be printed because it is already present (Map only print unique values)
// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

// const myObj = {
//   name1: "Abhishek",
//   name2: "Note",
//   // 'name1' : 'Abhishek',
//   // "name2" : 'Note'
// };
// for (const [key, value] of myObj) {
//   console.log(key, ":-", value);
// } // This is not a right way to iterate over an object

// const myObject = {
//   js: "JavaScript",
//   py: "Python",
//   rb: "Ruby",
//   go: "Golang",
//   ts: "TypeScript",
//   cs: "C#",
//   cpp: "C++",
//   java: "Java",
//   php: "PHP",
//   swift: "Swift",
// };

// for (const key in myObject) {
//   // if (Object.hasOwnProperty.call(object, key)) {
//   //     const element = object[key];

//   // }
//   // console.log(key);
//   // console.log(key, ":-", myObject[key]);
//   console.log(`${key} Shortcut for :- ${myObject[key]}`);
// }

// const programming = ['js', 'py', 'rb', 'go', 'ts', 'cs', 'cpp', 'java', 'php', 'swift', 'rust', 'kotlin', 'dart'];

// for (const index in programming) {
//     // console.log(index);
//     console.log(index, ":-", programming[index]);
// }

// const map2 = new Map();
// map2.set("IN", "India");
// map2.set("US", "United States");
// map2.set("UK", "United Kingdom");
// map2.set("FR", "France");

// for (const key in map2) {
//   if (map2.hasOwnProperty(key)) {
//     const value = map2.get(key);
//     console.log(`Key: ${key}, Value: ${value}`);
//   }
// }

// For Each Loop

const coding = [
  "js",
  "py",
  "rb",
  "go",
  "ts",
  "cs",
  "cpp",
  "java",
  "php",
  "swift",
  "rust",
  "kotlin",
  "dart",
];

// coding.forEach( function (item) {
//     console.log(item);
// } );

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item ,index, array) => {
//     console.log(item, index, array);
// })

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "Ruby",
    languageFileName: "rb",
  },
];

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageFileName);
});