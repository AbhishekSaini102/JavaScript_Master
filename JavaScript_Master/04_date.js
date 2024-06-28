//let date = new Date();
//console.log(date.toString());

let mydate = new Date('01-02-2024');
//console.log(mydate.toDateString());

let newDate2 = new Date();
//console.log(newDate2.toDateString());
//console.log(newDate2.getSeconds());
//console.log(newDate2.getMonth()+1);

let date3 = new Date();
let newDate = `${date3.getDate()}/${date3.getMonth()+1}/${date3.getFullYear()}`;
//console.log(newDate);

let date4 = new Date();
console.log(date4.toLocaleString('en-US', {timeZone:'Asia/Kolkata', weekday:'long'}));

let mynewdate = new Date(2024, 0, 24)

console.log(mynewdate.toDateString());
console.log(mynewdate.toLocaleString());
console.log(typeof mynewdate);

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mydate.getTime())

console.log(Math.floor(Date.now()/1000))
