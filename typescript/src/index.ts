let age: number = 20;
let myarray: Number[] = [];

// cool feature as we used number when we do foEach javascript will suggest related to number 
myarray.forEach((item) => item.toExponential())

let user : [number, string] = [1,'Mosh'];
user.push(1)


const small = 1;
const mediium = 2;
const large =  3;

// Enums Pascal 
// Use enums when you have a fixed set of related values 
// (like sizes, directions, statuses) to avoid bugs from typos or wrong numbers.
const enum Size {Small = 1, Medium = 2, Large = 3}

// HTTP Status codes
const enum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 }

let mySize:Size = Size.Medium; // 2
console.log('mySize',mySize)

// function 

// :number is like return type number
function calculateTax(income:number) :number{
    return 0
}
console.log(calculateTax(5))  // 0

// optional Parameter and pass an default value year = 2
function calculateTax1(income:number, year = 2) :number{
    return 0
}

calculateTax1(100, 5)
calculateTax1(100, 5)

// Object

let employee: {
    id : number,
    name : string
} = {id : 1, name: 'vikas'}

employee.name = 'Vikas'

// Read Only sometimes we do'nt change

let employee1: {
    readonly id   : number,
    name : string,
    retire : (date: Date) => void
} = {id : 1, name: 'vikas' , retire : (date : Date) =>{
    console.log(employee1.retire)
}}

console.log('employee1',employee1)

//  Adanced type
/* 
    Type aliases
    Unions and intersections
    Type narrowing
    Nullable types
    The unknown type
    The never type

*/

//  Type aliases
// we can define at one plcae and we can use anywhere in our code 

type employeeBase = {
    readonly id : number,
    name : 'string'
    retire : (date: Date) => void
} 

// Unions and intersections


function kgToLB(weight:number | string):number{
    // Narrowing 
    if(typeof weight === 'number'){
        return weight
    }
    return parseInt(weight)
}

console.log(kgToLB('12'))  // 12

// intersection | type

let weight : number | string;

type Draggable = {
    drag: () =>{
        
    }
}

