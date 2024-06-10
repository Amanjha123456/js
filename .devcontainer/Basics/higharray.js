//High Order Array loops
// for of 

//["", "", ""]
//[{}, {} ,{}]
// for (const iterator of object) {
//yaha iterator ka matlab koi varible hai 
//similarly object ka matlab ye nahi hai ki oject hai uska matlab hai ki kis object pe lagana hai variable ko 

    
// }
const arr = [1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);

    
}
const greetings = "Hello world !"
for (const greet of greetings) {
    //console.log('Each char is ', greet);
    
}
// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "America")
map.set('En', "England")
map.set('IN', "INdia")
//console.log(map);
for (const [key, value] of map) {
    //console.log(key,':-' , value);  //maps are not iterable
    
}
for (const key in map) {
    //console.log(key);
    
}

// const myobject = {
//     Game1: 'NFS',
//     game2: "spiderman"

// }

// for (const [key, value ] of myobject) {
//     console.log(key, ':-', value);
    
// }
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["ruby", 'js','py','java','cpp']
for (const key in programming) {
    //console.log(programming[key]);
   
}

const coding = ["js", "python", "Java", "ruby", "Cpp"]
coding.forEach(  function (a) {
    //callback function ka naam nahi hota hai 
    //console.log(a);


})
coding.forEach (  (iteem) => {
    //console.log(iteem);
})

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach ( (item, index, arr) => {
    //console.log(item, index, arr);

})

const mycoding = [
    {
        languagename: "js",
        languagefile: "javascript",

    },
    {
        languagename: "java",
        languagefile: "java",
        
    },
    {
        languagename: "Ruby",
        languagefile: "Ruby",
        
    },
]

mycoding.forEach( (item) => {
    console.log(item.languagename);
})




