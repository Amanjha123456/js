// singleton  koi constructor se banate hai to ek singleton object banega ,, wahi agar literals se banate hai to 
//singleton nahi banega
// object literals :- object ko declare karne ka ek tarika hai
// Object.create

const mysym = Symbol("key1")

const jsuser = {
    name: "Aman",
    "full name": "Aman Jha ",
    [mysym]: "my key1",
    age: 22,
    location: "noida",
    email: "amanjha@gmail.com",
    isloggedIn: false,
    lastlogindays: ["monday", "saturday"]





}
// myarr = ["h" , "i"]
// console.log(myarr[1]);
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser["full name"]);
console.log( typeof jsuser[mysym]);
console.log(jsuser[mysym]);

jsuser.email = "aman@gmail.com"
//Object.freeze(jsuser) // freeze jaha laga denge uske baad kuch bhi change karenge to nahi hoga,pehletak jo ho gaya hai wahi reh jayega

jsuser.email = "bhaskar@gmail.com"
//console.log(jsuser);

jsuser.greeting = function() {
    console.log("Hello JS user");

}

console.log(jsuser.greeting());

jsuser.greetingtwo = function() {
    console.log(`hello bro, ${this.name}`);
}
console.log(jsuser.greetingtwo());

