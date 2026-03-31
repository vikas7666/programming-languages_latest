// Functions with objects and array in javascript

// function calculatePrice(num1) {
//     return num1
// }
// console.log(calculatePrice(2,3,4,5));  

//  here we will get only one value return 
// To handle to take multiple paramater we have defiend spread or rest operator 

// function calculatePrice(...num1) {
//     return num1
// }
// console.log(calculatePrice(2,3,4,5));  // [ 2, 3, 4, 5 ]


// rest  ==> indivisual format means single single item

// function calculatePrice(num1, num2, ...num3) {
//     return num1
// }
// console.log(calculatePrice(2,3,4,5));  // [ 2, 3, 4, 5 ]


// let personObj = {
//     name : 'vikas',
//     price : 300,
// }
// here we are calling object data by using function and passing function argument as object
// function printUsername(anyobject) {
//     console.log(`username is ${anyobject.name}  ${anyobject.price}`)
// }

// we are passing obeject in function  
// console.log(printUsername(personObj));

//  Basically hum logo ne function me object pass kiya 

// printUsername({
//     name  : 'vipul',
//     price : 42
// })

// username is vipul  42


/* We can also pass array in to function  */ 

const myarr = [100,200,300,400]

function seconValueReturn(getItem){
   return  getItem[1]
}

console.log(seconValueReturn(myarr));  // 200
