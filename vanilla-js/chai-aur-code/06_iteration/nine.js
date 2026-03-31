// Reduce method basically use for addation in array or object

const mynums = [1,2,3]

// const myTotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)


// acc 0 and currval: 1
// acc 1 and currval: 2
// acc 3 and currval: 3

// using Arrow function 

// const myTotal = mynums.reduce( (acc, currval) =>{
//     return acc + currval
// },0)


// console.log(myTotal);  // 6

const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "python",
        price : 999
    },
    {
        itemName: "mobile dev course",
        price : 5999
    },
    {
        itemName: "data science",
        price : 12999
    }
]

const shoppingTotal = shoppingCart.reduce((acc,item) => acc + item.price)

console.log(shoppingTotal);