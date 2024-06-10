// const coding = ["js", "ruby", "python","java","cpp"]
// const values = coding.forEach ( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);  for each loop variable se value return nahi karta hai

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newnums = myNums.filter( (num) => num > 4)
// const newnums = myNums.filter( (num) => {
//     return num > 4
// })

// const newnums = []
// myNums.forEach( (aman) => {
//     if (aman > 4) {
//         newnums.push(aman)
        
//     }
// } )
// console.log(newnums);

const books = [
    {
        title: 'Book One', genre: 'fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'non-fiction', publish: 1992, edition: 2004
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2010
    }
];

//const userbooks = books.filter( (ak) => ak.genre === "History")

const userBooks = books.filter( (bk) => { 
    return bk.publish>1900 && bk.genre === "History"
})

console.log(userBooks);