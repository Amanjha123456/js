let score = "33abc"
let score1 = null
let score2 = undefined
let score3 = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score3)
console.log(typeof valueInNumber);
let a = String(score)
console.log(a);
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "aman"
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true; 0 => false
//"" => false // jab boolean khali tha to false aur bhar gaya hai to true
// "aman" => true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

