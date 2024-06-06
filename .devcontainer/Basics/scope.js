//var c = 300  // block ke bahar jo hai wo global scope hoga
let a = 300

if (true) {
    let a = 10
    const b = 20
     c =30 
     console.log("Inner: " , a);  

     // jo block ke under hai wo block scope hoga 

}
const Array = [10,20,30,40,50,60];
for( let i = 0; i < Array.length(); i++) {
    const element = Array[i];
    //console.log(element);
}


//console.log(a);
//console.log(b);
//console.log(c);