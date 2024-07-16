// if Statement 
// if else Statement
// else if Statement
// switch Statement
// for loop
// while loop
// do while loop
// break Statement
// continue Statement
// return Statement
// throw Statement
// try catch Statement
// finally Statement
// with Statement
// debugger Statement
// let Statement
// const Statement
// var Statement
// function Statement
// class Statement
// import Statement
// export Statement
// default Statement
// extends Statement
// super Statement
// this Statement
// arguments Statement
// delete Statement
// instanceof Statement
// new Statement
// in Statement
// typeof Statement
// void Statement
// yield Statement



// if(true){

// }
// if (false) {

// }

// const isLoggedIn = true;

// if (isLoggedIn) {
//     console.log('User is logged in');
// }

// if (2 == "2") {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }

// if(2 === "2"){ // === is used to check the type of the variable strictly check the type of the variable
//     console.log("executed");
// }
// else{
//     console.log("not executed");
// }

// <, > , <= , >= , == , === , != , !==, && , ||, !, ? :, switch case, break, continue, return, throw, try catch, finally, with, debugger, let, const, var, function, class, import, export, default, extends, super, this, arguments, delete, instanceof, new, in, typeof, void, yield, async, await, 

// if (2 != "3") {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }

// if (2 !== "3") {
//   // === is used to check the type of the variable strictly check the type of the variable
//   console.log("executed");
// } else {
//   console.log("not executed");
// }
// console.log("Execute");

// const score = 200
// if (score > 100){
//     // const power = "fly"
//     // var power = "fly"
//     let power = "fly";
//     console.log(`You have ${power} power`)
// }
// console.log(`You have ${power} power`);

// const balance = 1000

// if(balance > 500) console.log("You have enough balance"), console.log("test"); // Implicit return or scope // Immature way of writing the code

// if(balance > 500){
//     console.log("You have enough balance")
//     console.log("You can withdraw the money")
// }
// else if(balance === 500){
//     console.log("You have balance equal to 500")
// }
// else{
//     console.log("You don't have enough balance")
// }

// const balance = 2000;

// if(balance < 500){
//     console.log("Less than 500");
// }
// else if (balance < 1000){
//     console.log("Less than 1000");
// }
// else if(balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Greater than 1000");
// }

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("You can purchase the product");
}
else if(userLoggedIn){
    console.log("You can add the product to the cart");
}
else{
    console.log("You need to login first");
}

//switch statement
