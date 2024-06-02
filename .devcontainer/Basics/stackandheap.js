// stack (primitive), Heap (non-primitive)
// stack me copy create hota hai
// Heap me original value ka reference milta hai
//stack me copy milta hai , change karenge to jaha change kar rahe hai keval wahi change hoga 
//Heap me direct access milta hai data ka , agar kuch change hua to earlier bhi change ho jayega

let myname = "Aman Jha "
let anothername = myname
anothername = "Brahman Aman";
console.log(myname)


console.log(anothername);

let userOne = {

    email:  "aman@gmail.com",
    upi: "aman@paytm"

}
let usertwo = userOne
usertwo.email = "bhaskar@gmail.com"
console.log(userOne.email);
console.log(usertwo.email);