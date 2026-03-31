let score = "33abc";

//console.log(typeof score)  // string
//console.log(typeof (score)) // string

let valueInNumber = Number(score); 
//console.log(typeof valueInNumber); // number

//console.log(valueInNumber); // Nan
//console.log(typeof NaN); // number

let score1 = null;
//console.log(typeof score1); // Object

let score2 = Number(score1); 
//console.log(typeof score2); //number

//console.log(score2); // 0

let score3 = true;
//console.log(score3); // true

let score4 = Number(score3);
//console.log(score4);  // 1

/* 
if we try to convert Number such as string then it will return NAN
boolean value will be return to 1 or zero 
*/

// Note using Number
// "33" =33
// "33abc"  => NaN
// true  => 1  false = > 0


let isLoggedIn = 1;

let booleanIslogIn = Boolean(isLoggedIn);

//console.log(booleanIslogIn)  // true

// 1 => true  0 ==> false 

// "" => flase 
// "vikas" => true

let someNumber  = 33;

let stringNumber = String(someNumber);
//console.log(stringNumber);  // 33

// console.log(typeof stringNumber); // string

// **************************** Operation *****************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// Operation

// console.log(2**3) // 8 ** means power

// console.log( "1" + 2);   // 12  typeof string  
// console.log( 1 + "2");   // 12   typeof string  
// console.log("1" + 2 + 2) // 122   typeof string  
// console.log(3 + 2 + "2") // 52  typeof string  

// If string first pe hai to sab string me ho jaayega
// if string last me hai to sab normal then string

console.log(+true);  // 1
// console.log(true+);  // error

console.log(+"");  // 1 due to empty string it will 0 but due to + it will increment by 1
