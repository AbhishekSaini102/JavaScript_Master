const user = {
    username: 'abhishek',
    price : 999,

    getPrice: function(){
        // return this.price;
        console.log(this.price);
    },
    WelcomeMessage: function(){
        // return `Welcome ${this.name}`;
        console.log(`Welcome ${this.username}`);
        console.log(this);
    }

}
// user.price = 1000;
// user.getPrice(); // 999

// user.WelcomeMessage(); // Welcome Abhishek
// user.username = " aashi"
// user.WelcomeMessage(); // Welcome Abhishek
// user.username = user.username.toUpperCase();
// // user.username = user.username.toLowerCase();
// user.username = user.username.trim();
// user.WelcomeMessage(); // Welcome Abhishek

// console.log("current context in last :",this); // Window Object


// function fashion(){
//     const username = "Abhishek"
//     console.log(this.username)
//     console.log(username)
//     console.log(this)
// }
// fashion() // Window Object]

// const fashionOne = () => {
//     const username = "Abhishek"
//     console.log(this.username)
//     console.log(username)
//     console.log(this)
// }
// fashionOne() // Window Object



// const addTwoNum = (num1, num2) => { // explicit return
//     return num1 + num2
// }
// console.log(addTwoNum(2,13)) 

// const addTwoNum = (num1, num2) => num1 + num2  // (num1 + num2) // implicit return
// console.log(addTwoNum(2, 33)); 

// () => {} // simle arrow function
// () => () => {} // nested arrow function
// () => () // implicit return
// () => {()} // explicit return

// () {} // simple function
// () => {} // simple arrow function
// () => ({}) // Object return using implicit return
 
// const array =  [1,2,3,4,5,6,7,8,9,10]

// array.forEach((element, index) => {
//     console.log(element, index);
// })

// array.forEach(function () {})
// array.forEach(() => {})
// array.forEach(() => ({}))
// array.forEach(() => ())


// ++++++++++++++++++ Difference between function and arrow function ++++++++++++++++++++++++

const obj = {
    name: 'deeecode',
    age: 200,
    print: function() {
        console.log(this); // Refers to the 'obj' object
    }
};

obj.print(); // Outputs: { name: 'deeecode', age: 200, print: [Function: print] }

// Using an arrow function inside a normal function
const obj2 = {
    name: 'deeecode',
    age: 200,
    print: function() {
        const print2 = () => {
            console.log(this); // Still refers to the 'obj2' object
        };
        print2();
    }
};

obj2.print(); // Outputs: { name: 'deeecode', age: 200, print: [Function: print] }
