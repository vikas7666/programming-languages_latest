const app = require('./app');

// console.log(app) // { x: 10, y: 20 }
// console.log(app.z()) // 10

// Iterview Question
const arr = [2,4,5,4,3,2,1];

let hh = arr.filter((item) => item > 2);  
console.log(hh)   // [ 4, 5, 4, 3 ]

// if array me koi data filter karanaa hai always work with array