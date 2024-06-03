// array
const myarray = [0,1,2,3,4,5,6,true,"aman "]
const myheros = ["shaktiman", "naagraaj"]
const myaar2 = new Array(1,2,3,4)
console.log(myarray[3]);

// Array methods
//myarray.push(6)
//myarray.push(7)
//console.log(myarray);
//myarray.pop()

//myarray.unshift(9)
myarray.shift()
//console.log(myarray.includes(6));
//console.log(myarray.indexOf(9));
//myarray.shift()   jitna baar shift karenge utna data starting se hatte jayega 

// const newarr = myarray.join()
// console.log(myarray);
// console.log(typeof newarr);

// ++++++++++++++++++++  slice , splice ++++++++++++++++++++++++
//console.log("A ", myarray);
console.log("A" ,myarray);
const myn1 = myarray.slice(1,3)
console.log(myn1);
console.log("B ", myarray);
const myn2 = myarray.slice(1,3)
//console.log(myn1);
console.log(myn2);

const myn3 = myarray.splice(1, 3)
console.log("C ", myarray);
console.log(myn3);
//slice element ko hatata nahi hai,lekin splice pehle se jo element slice ho gaya hai ya hone wala hai 
//usse hata dega
//slice last element ko hata deta hai jabki splice me last element hota hai







