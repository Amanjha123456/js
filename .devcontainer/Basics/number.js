
const score = 400
const balance = new Number(100)
console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(2));

const othernumber = 1123.8966
console.log(othernumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++  Maths ++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(49));
console.log(Math.min(4,3,5,6,7,8));
console.log(Math.max(1,2,3,4,5,6,10));

console.log(Math.random()); //hamesha 0 aur 1 ke beech me value aayega
console.log(Math.floor(Math.random()*10) + 1);
// same concept se hum otp generate kar sakte hai
const min = 1000
const max = 9999

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

