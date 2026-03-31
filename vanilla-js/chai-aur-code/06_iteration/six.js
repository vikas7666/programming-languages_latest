// For each never return a value 

const coding = ["js","ruby","python","cpp"];

let value = coding.forEach(( item) =>{
    //console.log(item)
    //return item;  // undefined
})

// suppose if we want to check return value is java and apply some condation 
// then it will not work this is not possible with for each

// console.log(value)


// js
// ruby
// python
// cpp
// undefined


// const myNum = [1,2,3,4,5,6,10];

// if we start scope then we need to add return keyword
// const newNums = myNum.filter((num) => { 
//     return num > 4  // if we start scope then we need to add return keyword
// })
// console.log(newNums)  // [ 5, 6, 10 ]


// const newNums = myNum.filter((num) => num > 4)
// // console.log(newNums)  
// // [ 5, 6, 10 ]  // No need of return keyword bcz here we have not started scope

// let dividendNum = [];

// myNum.forEach( (num) =>{
//    if(num > 4){
//     dividendNum.push(num)
//    }
// })

// console.log(dividendNum);  // [ 5, 6, 10 ] 


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981,editon : 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992,editon : 2005},
    {title: 'Book Three', genre: 'History', publish: 1993,editon : 2006},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1994,editon : 2007},
    {title: 'Book Five', genre: 'Science', publish: 2009,editon : 2008},
    {title: 'Book Six', genre: 'Fiction', publish: 1996,editon : 2009},
    {title: 'Book Seven', genre: 'Fiction', publish: 1997,editon : 2010},
    {title: 'Book Eight', genre: 'History', publish: 2008,editon : 2011},
];

let userBooks  = []
// const userBooks  = books.filter( (bk) => bk.genre === "History")

// console.log(userBooks);

[
    {
      title: 'Book Three',
      genre: 'History',
      publish: 1993,
      editon: 2006
    }
]

// userBooks = books.filter( (bk) => (bk.publish >= 2000))

// console.log(userBooks);  // 
// [
//     { title: 'Book Five', genre: 'Science', publish: 2009, editon: 2008 },
//     {
//       title: 'Book Eight',
//       genre: 'Fiction',
//       publish: 2008,
//       editon: 2011
//     }
//   ]

userBooks = books.filter( (bk) => (bk.publish >= 2000 && bk.genre ==='History'))
console.log(userBooks);

[
    {
      title: 'Book Eight',
      genre: 'History',
      publish: 2008,
      editon: 2011
    }
  ]