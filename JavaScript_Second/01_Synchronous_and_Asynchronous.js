//Synchronous
console.log("Start cooking for Customer 1...");
// Assume cookForCustomer function takes 5 seconds to complete
cookForCustomer(1);
console.log("Finished cooking for Customer 1");

console.log("Start cooking for Customer 2...");
// Assume cookForCustomer function takes 2 seconds to complete
cookForCustomer(2);
console.log("Finished cooking for Customer 2");

console.log("Start cooking for Customer 3...");
// Assume cookForCustomer function takes 3 seconds to complete
cookForCustomer(3);
console.log("Finished cooking for Customer 3");

// Asynchronous
console.log('Customer 1 places order...');

setTimeout(() => {
    console.log('Order for Customer 1 is ready!');
}, 5000); // Assume it takes 5000 milliseconds to prepare the order

console.log('Customer 2 places order...');

setTimeout(() => {
    console.log('Order for Customer 2 is ready!');
}, 2000); // Assume it takes 2000 milliseconds to prepare the order

console.log('Customer 3 places order...');

setTimeout(() => {
    console.log('Order for Customer 3 is ready!');
}, 3000); // Assume it takes 3000 milliseconds to prepare the order
