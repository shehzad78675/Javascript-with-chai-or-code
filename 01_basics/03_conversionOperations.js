let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber); 

score = "33abc";

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber); // NaN

score = null;

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber); // 0

score = undefined;

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber); // NaN

// "33" => 33 
// "33abc" => NaN
// true => 1, false=> 0 

let isLoggedIn = 1;

console.log(typeof isLoggedIn);
console.log(typeof(isLoggedIn));

let valueInBoolean = Number(isLoggedIn);
console.log(typeof valueInBoolean)
console.log(valueInBoolean); // true

