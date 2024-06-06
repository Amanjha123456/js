function one() {
    const username = "Aman "

    function two() {
        const website = "github"
        //console.log(username);   //under ka function bahar ke variables ko access kar sakta hai
        //child function parent ke variables ko access kar sakte hai
    }
    //console.log(website);
    two()
}

one()

if (true) {
    const username = "Aman "
    if (username === "Aman ") {
        const wensite = " github"
        //console.log(username + wensite);
    }
    //console.log(wensite);
}
//console.log(username);

// +++++++++++++ Interesting ++++++++++++++++
console.log(addone(5))
function addone(num) {
    return num + 1

}
//console.log(addone(5))
//console.log(addtwo(5))
const addtwo =  function(num) {
    return num + 2

}


console.log(addtwo(5))