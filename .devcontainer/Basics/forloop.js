// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        
        //console.log("5 is best number ");
    }
    //console.log(element);
    
}
//console.log(element);

for (let i = 1; i < 10; i++) {
    //console.log(`outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j );
        
    }
    //const element = i;
    
}

let myArray = ["flash", "batman" , "superman"]
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

// break and continue 

// for (let index = 0; index < 21; index++) {
//     const element = index;
//     if(index == 5) {
//         console.log(`Detected ${index}`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }
for (let index = 0; index < 21; index++) {
    const element = index;
    if(index == 5) {
        console.log(`Detected ${index}`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}