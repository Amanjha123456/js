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

// ************************* Operations ***********************************
let value = 3
let negvalue = -value
//console.log(value)
//console.log(negvalue)

console.log(2+2);
console.log(2-3);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "aman"
let str2 = " jha"
str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //string first hai to sabko string banao
console.log(1 + 2 + "2"); //string last hai to pehle jo hai uska kaam kar lo 
console.log( (3 + 4) * 5 % 3);
console.log(+true);
//console.log(true+); // nahi hoga kyuki last me plus ka koi matlab nahi hai
console.log(+"");
x = ""
console.log(x);

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


