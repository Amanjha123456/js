function calculatecardprice(val1, val2, ...num1) {
    return num1
    //rest ka marlab hai abhi ye aise khule me hai,sabko bundle me banao aur ek array type banake bhejo
    // ... ka matlab hai rest operator hai, sabko add karo jitna value daal sakte ho

}
console.log(calculatecardprice(200, 400 ,500, 600))

const user = {
    username: "aman",
    price: 199
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)
handleobject({
    username: "Aman JHA",
    price: 399

})

const mynewarray = [200, 400, 600]

function returnsecondvalue(getarray) {
    return getarray[1]

}
console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([1000,2000,4,5,6,7]));