const accountId = 14453;
let accountEmail = "hamza@gmail.com";
var accountPassword = "12345";
accountCity = "Lahore";

// accountId = 2 not allowed

accountEmail = "abc@gmail.com";
accountPassword = "2323";
accountCity ="Sheikhupura";
let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// Prefer not to use var
// Because of issure in block scope and functional scope