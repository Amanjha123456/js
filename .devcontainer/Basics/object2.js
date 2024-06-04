//const tinderuser = new Object() // ye singleton object hai
const tinderuser = {}  // ye non singleton object hai

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false


//console.log(tinderuser);
const regularUser = {
    email : "aman@123gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aman",
            lastname: "Jha"

        }

    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "e", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const oj3 = {obj1 , obj2 }
//const obj3 = Object.assign({},  obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}

//const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const users = [
    {
        id: 1,
        email: "aman@gmail.com"
    },
    {
        id: 2,
        email: "bhaskar@gmail.com"
    }
]
console.log(users[0].email)

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));