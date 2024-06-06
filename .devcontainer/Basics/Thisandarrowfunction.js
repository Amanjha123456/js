const user = {
    username: "Aman Jha ",
    price: 999,

    welcomemesaage: function() {
        console.log(`${this.username} , welcome to website `); //this current context ko refer krta hai 
        //console.log(this);
    }

}
// user.welcomemesaage(),
// user.username = "BHaskar ",
//  user.welcomemesaage()
//console.log(this);

// function chai() {
//     let username= "Aman Jha "
//     console.log(this.username);
//     console.log(this);
// }
// chai()

// const chai = function() {
//     let naam = "Aman "
//     console.log(this.naam);
// }

const chai = () => {
    let naam = "Amann Jha "
    console.log(this.naam);
}

//chai()

// const addtwo = (n1,n2) => {
//     return n1+n2
// }

//const addtwonumber = (n1,n2) =>   n1+n2
// isse implicit return kehte hai jisme hame return aur object banane ki koi jarurrat nahi hai
//maan ke chalte hai ki apne aap se le lega 

//const addtwosankhya = (n1,n2) => (n1+n2)
//agar object(curly braces) lagaya to return lagana hi padega

const addkaro = (n1,n2) => ({


    username: "Aman Jha "})
    //object ko return karne ke liye paranthesis me wrap karna hi padega 


console.log(addkaro(2,4))

// const myarray = [1,2,3,4,5,6]
// myarray.forEach()





