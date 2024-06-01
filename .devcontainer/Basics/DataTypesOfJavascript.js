// Primitive dataTypes :- call by value


// 7 types : String, Number , Boolean , null , undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;

const id = Symbol('123')  // symbol ek unique key deta hai,agar same data aur same datatype denge tabhi bhi ye 
// unique key nikal  ke dega 
const anotherid =Symbol('123')

console.log(id);
console.log(anotherid);
console.log(id == anotherid);

//const bigNumber =12223333333n;


const heros = ["sahktiman", "naagraaj", "doga"]
let myObj = {
    name: "Aman",
    age: 22,

}

const myFunction = function() {
    console.log("Aman");

}
console.log(typeof myFunction);







// Reference type (Non primitive ) :- call by Reference

// Array , Objects , Functions 