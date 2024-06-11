const mynums = [1,2,3]


// const mytotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
const mytotal = mynums.reduce( (acc, curr) => acc+curr, 0)

console.log(mytotal);

const shoppingcart = [
   
    {
        itemname: "js courser",
        price: 2999,


    },
    {
        itemname: "c++ courser",
        price: 3999,


    },
    {
        itemname: "python courser",
        price: 4999,


    },
    {
        itemname: "React courser",
        price: 5999,


    },
]

 const pay = shoppingcart.reduce( (pcc,item) => pcc + item.price, 0)
 console.log(pay);