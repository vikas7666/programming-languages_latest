const name = 'vikas';
const age  = 18;

// console.log(name + age + "value");

// `` backtick ==> it is string interpolation

// console.log(`My name is ${name.toUpperCase()} and my age is ${age}`);

const game = new String('hello-hc')
// console.log(game);
// console.log(game[0]);

// console.log(game.__proto__);  // empty object

// we can access method directly using __proto__ e.g toUpperCase()

//console.log(game);  // [String: 'hello]
//console.log(game.toUpperCase());  // Hello

// As we know it will not change its original value it will a copy of that variable.

//console.log(game.charAt(2)); // op : l => here we can pass number 
//console.log(game.indexOf('t'));  // As hello is not there then its showing -1 
//console.log(game.indexOf('l'));  // 2 ==> first occourence

// const newString =  game.substring(0,6); // we can use negetive value
// console.log(newString);  // hello

const anotherString = game.slice(-8,2);   // we can use negetive value 
// console.log(anotherString);  // he

const newStringOne =  ' hitesh     ';
// console.log(newStringOne); //  hitesh // with space 
// console.log(newStringOne.trim())   // hitesh proper 

const url = "https://vikas%20.com" // browser by default add %20 in space

// console.log(url.replace('%20', '-'));  // https://vikas-.com

// console.log(url.includes('tesh')); // false 

// console.log(game.split('-'));  // [ 'hello', 'hc' ]  will return un array 

console.log(url.split('%20')) // will return in [ 'https://vikas', '.com' ]


