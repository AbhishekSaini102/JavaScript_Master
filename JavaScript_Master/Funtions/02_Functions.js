// function add(number1, number2) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     return number1 + number2;
//   } else {
//     return "Please Enter Numbers Only";
//   }
// }

// const result = add(10, 30);
// console.log("Result:", result);


function CalculateCartPrice(val1, val2, ...num1){ //Rest Operator
    // console.log("Val1:", val1);
    // console.log("Val2:", val2);
    
    return {val1, val2, num1}
    // return num1;
}

// CalculateCartPrice(1000);
// console.log("Cart Price:", CalculateCartPrice(1000, 2000 ,3000, 4000))    // Cart Price: 1000;

// const result = CalculateCartPrice(1000, 2000, 3000, 4000);

// console.log("Cart Price:", result.val1,  result.val2, result.num1);

// console.log(CalculateCartPrice(1000, 2000, 3000, 4000));

// console.log("Type of num1:", typeof num1);

// if (Array.isArray(result.num1)) {
//   console.log("num1 is an array!");
// } else {
//   console.log("num1 is not an array.");
// }


const user = {
    name:"Abhishek",
    point: 1000
}

function userObject(anyObject){
    console.log(`User Name: ${anyObject.name} and Point: ${anyObject.point? anyObject.point : 0}`);
    return anyObject;
}
// const result = userObject(user);
// console.log("Result:", result.name, result.point);
// console.log("Result - Name:", result.name, "Point:", result.point);

// userObject(user);

// userObject({
//     name:"Saini",
//     point: 2000
// })

// const resultArrayObject = userObject([
//     {
//         name:"Saini",
//         point: 2000
//     },
//     {
//         name:"Abhishek",
//         point: 3000
//     }
// ])

// console.log("Result:", resultArrayObject);
// console.log("Result:", resultArrayObject[1].name, resultArrayObject[1].point);

const NewArray = [100,200,300,400,500,600,700,800,900,1000];

function returnSecondElement(getArr){
    return getArr[1];
}   

console.log("Second Element:", returnSecondElement(NewArray));
console.log("Second Element:", NewArray[1]);
console.log("Second Element:", NewArray[1] + 1000);
console.log(returnSecondElement([1000, 3100, 9000]));