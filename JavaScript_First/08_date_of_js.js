// Dates
// 1. Date object
// 2. Date methods
// 3. Date formats


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate1 = new Date(1998,9,15)
// let myCreatedDate = new Date('1998-08-15')
let myCreatedDate = new Date('01-10-2023')
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now() - myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate2 = new Date()
console.log(newDate2.toDateString());
console.log(newDate2.getSeconds());
console.log(newDate2.getMonth()+1);

`${newDate2.getDate()}/${newDate2.getMonth()+1}/${newDate2.getFullYear()}`
console.log(`${newDate2.getDate()}/${newDate2.getMonth()+1}/${newDate2.getFullYear()}`);

newDate2.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'})
console.log(newDate2.toLocaleString('en-US', {timeZone: 'Asia/Kolkata',
weekday: 'long'

}));