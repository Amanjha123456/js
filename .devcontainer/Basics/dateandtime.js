//Dates
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON);
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

//let mycreateddate = new Date(2024, 5, 3)
//let mycreateddate = new Date(2024, 5, 3, 4,33)
//let mycreateddate = new Date("2024-06-03")
let mycreateddate = new Date("06-02-2024")
//console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth() + 1)
console.log(newdate.getDay() + 1);

mydate.toLocaleString('default',
    {
        weekday: "long",

        
    }
)

