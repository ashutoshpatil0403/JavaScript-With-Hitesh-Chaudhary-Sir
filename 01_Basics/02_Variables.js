const accountId = 553
let accountEmail = "Ashutosh@google.com"
var accountPassword = "123"
accountCity = "Lothal"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ashu432@.com"
accountPassword = "21234"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])