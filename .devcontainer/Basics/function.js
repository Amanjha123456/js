


function name()  {
console.log("A");
console.log("M");
console.log("A");
console.log("N");

}
//name()
// function addtwonumbers(number1, number2 ) {
//     console.log(number1 + number2)

// }
function addtwonumbers(number1, number2 ) {
    // console.log(number1 + number2)
    //let result = number1 + number2
    //console.log(result);
    //return result
    return number1 + number2

    
}
const result = addtwonumbers(3, 5)
//console.log("Result: " , result);
function loginusermessage(username = "aman") {
    if(!username) {    //kuch cheezo ko maan liya jata hai ki ye false hai js me waise hi undefined ko
        // bhi false maan liya jata hai ab agar ye false hua to if me jayega hi nahi,isiliye isse true banane ke 
        //liye not laga dete hai jisse ye true ho jata hai 
        // ** //ye similar hai username === undefined , dono ek hi cheez hai
        console.log("please enter a username");
        return 

    }
    return `${username} just logged in `

}
console.log(loginusermessage("bhaskar"))

