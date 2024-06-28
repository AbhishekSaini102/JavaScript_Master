// Constructor: Object()
// Prototype: Object.prototype
// Inheritance: Object.prototype
// literal notation: {}

//Singletons
// Object.create

const  mysybl = Symbol("key1")
const jsUser = {
    name: "Abhishek",
    "full_name" : "Abhishek Kumar",
    [mysybl] : "mykey1",
    age:24,
    location: "India",
    blogs: ["JavaScript", "React", "NodeJs"],
    isLoggedin: true,
    login: function(){
        console.log("User is logged in");
    },
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser.full_name);
// console.log(jsUser[mysybl]);

jsUser.name = "Abhishek Kumar";
// console.log(jsUser.name);
// Object.freeze(jsUser);
jsUser.name = "Abhishek Kumar Saini";
// console.log(jsUser.name);
// console.log(jsUser);

jsUser.greetings = function(){
    console.log(`Hello, ${this.name}`);
}
console.log(jsUser);
console.log(jsUser.greetings);
console.log(jsUser.greetings());