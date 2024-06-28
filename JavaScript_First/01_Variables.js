const accountId = 144556
let accountEmail = "abc12@gmail.com"
var accountPassword = "abc123"
accountCity = "Bangalore"
let accountState = true;

// accountId = 2 //Not Allowed in javascript
accountEmail = "ab@gmail.com"
accountPassword = "abc1234"
accountCity = "Mumbai"
console.log(accountId);
// console.log(accountEmail);

/*
prefer not to use var 
because of issues in block scope and function scope

*/ 
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])