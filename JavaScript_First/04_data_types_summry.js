// premitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// reference or non premitive data types : Object, Array, Function

const bigNumber = 1234567890123456789012345678901234567890n
const score = 10
const scoreValue = 10.3

const isLoggedIn = true
const isLoggedOut = false

const outSideTemp = null

let userEmail;

const id = Symbol("123")
const id2 = Symbol("123")

console.log(id === id2);

// array, object, function
const writers = ["Abhishek", "kamu", "saini"]  

let myobj = {

    name:"abhsiehk",
    age:22,
}

const myFuction = function(){
    console.log("hello world");
}

// myFuction();

// console.log(typeof bigNumber);
// console.log(typeof myFuction);
console.log(typeof writers);
// console.log(myFuction());

