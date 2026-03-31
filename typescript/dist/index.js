"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
let myarray = [];
// cool feature as we used number when we do foEach javascript will suggest related to number 
myarray.forEach((item) => item.toExponential());
let user = [1, 'Mosh'];
user.push(1);
const small = 1;
const mediium = 2;
const large = 3;
// Enums Pascal 
// Use enums when you have a fixed set of related values 
// (like sizes, directions, statuses) to avoid bugs from typos or wrong numbers.
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
// HTTP Status codes
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["ServerError"] = 500] = "ServerError";
})(HttpStatus || (HttpStatus = {}));
let mySize = Size.Medium; // 2
console.log('mySize', mySize);
// function 
// :number is like return type number
function calculateTax(income) {
    return 0;
}
console.log(calculateTax(5)); // 0
// optional Parameter and pass an default value
function calculateTax1(income, year = 2) {
    return 0;
}
calculateTax1(100, 5);
calculateTax1(100, 5);
// Object
let employee = { id: 1, name: 'vikas' };
employee.name = 'Vikas';
// Read Only sometimes we do'nt change
let employee1 = { id: 1, name: 'vikas', retire: (date) => {
        console.log(employee1.retire);
    } };
console.log('employee1', employee1);
// Unions and intersections
function kgToLB(weight) {
    // Narrowing 
    if (typeof weight === 'number') {
        return weight;
    }
    return parseInt(weight);
}
console.log(kgToLB('12'));
//# sourceMappingURL=index.js.map