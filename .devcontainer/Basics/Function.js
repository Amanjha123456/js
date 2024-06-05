


function saymyname() {
console.log("A");
console.log("M");
console.log("A");
console.log("N");
console.log("");
console.log("J");
console.log("H");
console.log("A");

}
//saymyname()
//const a  = saymyname();
//console.log(a);
//console.log(saymyname());

// function addtwonumbers(n1, n2) {  // n1,n2 function ke samay parameter hoga
//     console.log(n1 + n2);

// }
// //addtwonumbers()
//addtwonumbers(3,"4")   // yaha 3,"4" arguments hai 
//addtwonumbers(3, "a")
//addtwonumbers(3, null)

function addtwonumbers(n1 , n2)
{
    // let result = n1+n2
    //console.log("Aman");
    // return result
    //console.log("Aman");  // return statement ke baad kuch bhi execute nahi hoga
     return n1 + n2
}

const result = addtwonumbers(2 , 4)
console.log("result: ", result);

function loginusermessage(username = "Aman ") {
    if(!undefined) {  //!undefined is same as username === undefined

        console.log("please enter a user name");
        //return 

    }
    return `${username} just logged in `
}
console.log(loginusermessage("Aman Jha "))
//console.log(a);
console.log(loginusermessage("Aman "));
