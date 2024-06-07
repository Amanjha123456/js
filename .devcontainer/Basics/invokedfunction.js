//immediately invoked function expression
(function chai() {  //named IIFE
    console.log(`DB CONNECTED`);
})();
//chai()

//()()

// iska use global pollution ko hatane ke liye karte hai
//ye instantly function ko execue karta hai
( (name) => {
    console.log(`DB CONNECTETD TWICE ${name}`);  //IIFE
}) ('Aman')