// console.log("Abhishek Kumar Saini")

// for(var i=0; i < 3; i++){

//     setTimeout(function(){
//         setTimeout(function () {
//         console.log(i);
//         }, 1000);
//     },1000)
// }


// function myFunction(callback) {
//   setTimeout(() => {
//     const data = { name: "Aman", age: 21 };
//     callback(data);
//   }, 3000);
// }

// myFunction((data) => {
//   console.log("Data:", data);
// });

function myData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Abhishek", age: 23 };
      resolve(data);
    }, 2000);
  });
}

myData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  async function myData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  }

  myData();
