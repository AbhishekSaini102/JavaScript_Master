// Immediately Invoked Function Expressions (IIFE)


(function NormalFunction() {
    //Named IIFE Function
    console.log(`DB Connected Successfully`)
})();

// ()() // because of Immediate execution of a function and to remove the pollute of global scope or from the global scope

( (name) => {
    //Simple or Unnamed IIFE Function
    console.log(`DB two Connected Successfully, ${name}`)
})("Abhishek");


( function twoDb(){
  //Named IIFE Function
  console.log(`DB two Connected Successfully`);
})();