// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// initialValue = 0;
// const sumWithInitials = array.reduce((accumulator, currentValue) => {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`)
//     return accumulator + currentValue;
// },initialValue);

// const sumWithoutInitials2 = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sumWithInitials); // 55
// console.log(sumWithoutInitials2); // 55


const shoppingCart = [
    { product: 'phone', quantity: 1, price: 699 },
    { product: 'Screen Protector', quantity: 1, price: 9.98 },
    { product: 'Memory Card', quantity: 2, price: 20.99 },
    { product: 'Charger', quantity: 1, price: 19.99 },
    { product: 'Case', quantity: 1, price: 24.99 },
    { product: 'Headphones', quantity: 1, price: 44.99 }
];

const total = shoppingCart.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue.price}`);
    return accumulator + currentValue.price * currentValue.quantity;
}, 0);

console.log(total.toPrecision(5)); // 819.93
console.log(total.toFixed(2)); // 819.93