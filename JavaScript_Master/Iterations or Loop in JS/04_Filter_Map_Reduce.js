// const coding = [ "js", "py", "rb", "go", "ts", "cs", "cpp", "java", "php", "swift", "rust"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myNums.filter((num) => {
//   // console.log(num);
//   return num % 2 === 0; // even numbers
// });
// console.log(myNums); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = myNums.filter((num) => {
//   // console.log(num);
//   return num % 2 === 0; // even numbers
// });
// console.log(result); // [2, 4, 6, 8, 10]

// Map like Filter
// const newNums = []
// myNums.forEach((num) => {
//     if(num % 2 === 0) {
//         newNums.push(num)
//     }
//     else{
//         console.log("Odd number is: ", num)
//     }
// })
// console.log(newNums); // [2, 4, 6, 8, 10]

const books = [
  {
    title: "Book1",
    genre: "Fiction",
    rating: 4.5,
    published: 2010,
    editions: 5,
    author: "Author1",
  },
  {
    title: "Book2",
    genre: "Non-Fiction",
    rating: 4.0,
    published: 2015,
    editions: 2,
    author: "Author2",
  },
  {
    title: "Book3",
    genre: "Fiction",
    rating: 4.9,
    published: 2019,
    editions: 1,
    author: "Author3",
  },
  {
    title: "Book4",
    genre: "Non-Fiction",
    rating: 3.5,
    published: 2012,
    editions: 3,
    author: "Author4",
  },
  {
    title: "Book5",
    genre: "Fiction",
    rating: 4.7,
    published: 2017,
    editions: 4,
    author: "Author5",
  },
  {
    title: "Book6",
    genre: "Non-Fiction",
    rating: 4.3,
    published: 2014,
    editions: 6,
    author: "Author6",
  },
  {
    title: "Book7",
    genre: "Fiction",
    rating: 4.8,
    published: 2018,
    editions: 7,
    author: "Author7",
  },
  {
    title: "Book8",
    genre: "Non-Fiction",
    rating: 4.2,
    published: 2013,
    editions: 8,
    author: "Author8",
  },
  {
    title: "Book9",
    genre: "Fiction",
    rating: 4.6,
    published: 2016,
    editions: 9,
    author: "Author9",
  },
  {
    title: "Book10",
    genre: "Non-Fiction",
    rating: 3.9,
    published: 2011,
    editions: 10,
    author: "Author10",
  },
];

// const userBooks =  books.filter ( (book) => {
//     return book.rating > 4.5 && book.genre === "Fiction"
// })

// const userBooks =  books.filter ( (book) => {
//     return book.rating > 4.5 && book.genre === "Fiction"
// }).map((book) => {
//     return book.title
// })

const userBooks = books
  .filter((book) => {
    return book.published > 2015;
  })
//   .map((book) => {
//     return book.title;
//   });
console.log(userBooks);
