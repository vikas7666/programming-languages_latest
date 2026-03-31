//  Array specific loop

// For of loop

/* loop handle when count is ending and length */

// let myarr = [1, 2, 3, 4, 5]

// for( let num of myarr){
//     console.log(num);
// }

// /* 1 2 3 4 5 */

// const greting  = "Hello Word";

// for( const letter of greting){
//     console.log(letter);
// }

/* H e l l o  W o r d */

// Maps 

// Unique value ke liye jaani jaati hai 
//  duplicate value nahi hota 
// if we insert duplicate value then it will not allowed 

const map = new Map();
map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr',"France");
map.set('In',"India") ; // ignore

// console.log(map);

/* Map(3) {
    'In' => 'India',
    'USA' => 'United State of America',
    'Fr' => 'France'
  }
 */

// Using for of loop 

/* for(const key of map){
    console.log(key)
} */

// This will print in this containing array 

/* [ 'In', 'India' ]
[ 'USA', 'United State of America' ]
[ 'Fr', 'France' ] */


// how to seperate key and value pair differntly using array destructuring

// for (const [key, value] of map) {
//     console.log(`After array destructuring ${key}, :- ${value}`);
// }

/* After array destructuring In, :- India
After array destructuring USA, :- United State of America
After array destructuring Fr, :- France
 */


//  For of will not work in object

// let myarr1 = {
//     game1 : 'NFS',
//     game2 : 'Cricket'
// }

// for (const [key,value] of myarr1) {
//     console.log(`${key} :- ${value}`);    
// }


//T ypeError: myarr1 is not iterable
