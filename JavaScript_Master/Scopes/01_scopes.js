// const a = 10;
// let b = 20;
// var c = 30;

// var c = 200;
//  c = 200;
// let a = 200;

// if(true){
//     const a = 10;
//     let b = 20;
//     // var c = 30;
//     // var c = 3;
//     console.log(a);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "Abhishek";

//     function two(){
//         const website = "youtube.com";
//         console.log(username);
//         console.log(website);
//     }
//     // console.log(website);
//     // two();
//     console.log(username);
// }
// one();

if(true){
    const username = "Abhishek";

    if(username == "Abhishek"){
        const website = " youtube.com";
        // console.log(username + website);
        
    }
    // console.log(Website);
    // console.log(username);
}

// console.log(username);

// +++++++++++++++ Interesting Scenarios +++++++++++++++

// addone(10); this is Right (Executing before the function declaration)
function addone(num){
    return num + 1;
}

addone(10); 

addTwo(10); //but this is wrong because of hoisting 
const addTwo = function(num){
    return num + 2;

}
// addTwo(10);