const marvel_heroes = ['thor','Ironman','spiderman']
const dc_heroes = ['superman','flash    ','spiderman']

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)  // [
// op ['thor', 'Ironman', 'spiderman',[ 'superman', 'flash    ', 'spiderman' ]]

// console.log(marvel_heroes[3][0]); // superman
// console.log(marvel_heroes[3][1]); // flash

/* ------- concat ------------- 
 contact return in new array 
*/

// const allHero = marvel_heroes.concat(dc_heroes)
// console.log(allHero); // ['thor','Ironman','spiderman','superman','flash','spiderman']

/* -------------- Spread Operator ------------------*/

// const allHero  = [...marvel_heroes, ...dc_heroes]
// console.log(allHero);   ['thor','Ironman','spiderman','superman','flash','spiderman']

/* -------------- Flat operator 
By using this operator we can make a single array suppose we have mix array
------------------*/

let mixArray = [1,2,3,[4,5], [7,9]]

// let cleanAraay = mixArray.flat(Infinity)
// console.log(cleanAraay) // [ 1, 2, 3, 4, 5, 7, 9]

/* how to check is Array */

// console.log(Array.isArray(cleanAraay));  // true

// How to make string into string 

// let stringArray =  new Array('Hello')
// console.log(Array.from("Hello"));  [ 'H', 'e', 'l', 'l', 'o' ]

// ** 
// console.log(Array.from({name : 'vikas'})); // It will not convert bcz its has 2 parameter if we want then we have to give keys and value 

// If we want to clubbed and want into array then we have used of method in js  

let a = 100;
let b = 100;
let c = 20;

console.log(Array.of(a,b,c));  // [ 100, 100, 20 ]