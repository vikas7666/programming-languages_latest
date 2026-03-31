const score =  400;
// console.log(score);  // js detect number type

let num1  =  new Number(100)  //  this will excat number
// console.log(num1);  // [Number: 100]
// console.log(typeof num1)  // obj
let tostringNumber  =  score.toString()
// console.log(typeof tostringNumber);  // string

const num2  = 23.88;

// console.log(num2.toFixed());  // 24

let num22 = 1000000;

// console.log(num22.toLocaleString('en-In')); //  10, 00 , 000 it will show in indian format 

// ++++++++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math); // Object [Math] {} 
// console.log(Math.abs(-4));   // abs change the negetive to positive value 

// Positive will remain positive and negtive will become positive 

// console.log(Math.round(4.4));  // 4 (if it above 4.5 then return 5 )
// console.log(Math.ceil(4.3));  // 5 
// console.log(Math.floor(4.9));  // 4

// console.log(Math.min(4,3,2,1));  // 1 

// console.log(Math.floor(Math.random() * 10)); // number between 1 to 10 

// console.log(Math.random());     // 0.5033254045172342
// console.log(Math.random() + 1); // 1.3243739348189318
console.log(Math.floor(Math.random() + 1)); // 1

console.log(Math.floor(Math.random() + 1) + 10); // 1

