//javascript execution context
//{} global execution context (this)  js is single threaded
//global execution context
// function execution context
//eval execution context
//first memory creation phase isme bs meory allocation hota hai
//execution phase
let val1 = 10
let val2 = 20
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2);
let result2 = addnum(10,2);
console.log(result1);
console.log(result2);

// 1:- globalexecution -- this
//2:- memory phase -- val1 ->undefined, val2 -> undefined, addnum :- execution result1 ->undefined
//result2 -> undefined
//3:- execution phase val1 = 10,val2 = 5  
//result 1 = 15, 
//NVE
 //  memory phase , execution phase
   // + thread
//addnum :- newvariable environment + execution phase 
//then memory phase val1 -> undefined,val2 ->undefined, total :- undefined then 
//execution context num1 -> 10, num2 -> 5, total ->15  total is executed to global execution context
// global execution context use hone ke baad delete bhi hota hai
// +++++++++++ call stack ++++++++++++++++++++
//Global execution
//LIfo last in first out
