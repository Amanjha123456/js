const name= "Aman "
const repoCount = 5
console.log(name + repoCount + "  of Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} which is a string `);

const gameName = new String("Aman Jha -Bihar-madhubani")

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0, 4) //substring me negative value nahi ho sakta hai agar denge to automatic wo isse zero samajh lega
console.log(newString);

const anotherString = gameName.slice(-14,4) // slice me hum negative value de sakte hai aur ye reverse me value dega 

console.log(anotherString);

const newstrin1 = "   aman   jha  "
console.log(newstrin1.trim());
console.log(newstrin1);

const url = "https://aman.com%2020"
console.log(url.replace('%20', '-'))

console.log(url.includes("aman"))

console.log(gameName.split('-'));
