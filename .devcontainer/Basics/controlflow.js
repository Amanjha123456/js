// if statement 

const isUserloggedIn = true
const temperature = 51
if (temperature < 41) {
    //if tabhi execute hoga jab conditional statement true hoga 
    //single equal operator assign karta hai
    //double equal operator check karta hai aisa ho raha hai ki nahi
    //console.log("Temperature is less than 50 ");


} else {
    //console.log("Temperature is more than 50");
}


if (2 !=="2"){
    //console.log("Executed");
}
// if (false) {

// 3 !=2
//2<=2
//<,>,<=,>=,==, !=, ===(strongly check,check its type ), !==

const score = 200
if (score > 1000) {
    let power = "fly"
    //console.log(`user power: ${power}`);
}
//console.log(`user power: ${power}`)

const balanace = 1000
//if (balanace > 500) console.log("test"); //implicit scope,multiple line nahi likh sakte isme 
//console.log("test2");
if (balanace < 500) {
    //console.log("less than 500");

} else if (balanace < 750) {
    //console.log("less than 750 ");
} else if (balanace <900) {
    //console.log("less than 900");
}else {
    //console.log("More than 1000 or equal to 1000");
}

const userloggedin = true 
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userloggedin && debitcard    ) {
    console.log("Allow to buy courses ");
}

if (loggedinfromemail || loggedinfromgoogle || true) {
    console.log("Ya to email se login hua hai ya to google se hua hai ya guest user hai ");
}




