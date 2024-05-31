const accountId = 144553
let accountEmail = "jhaman825@gmail.com"
var accountPassword = "12345"
accountCity = "patna"
let accountState;

// accountId = 2 // not allowed 
console.log(accountId);

accountEmail = "aman@gmail.com "
console.log(accountEmail);
accountPassword = "99999"
console.log(accountPassword);
accountCity = "Noida"
console.log(accountCity);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])


/*
prefer not to use var
because of issue in block scope and functional scope


*/