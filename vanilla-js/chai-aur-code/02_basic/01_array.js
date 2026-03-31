/* [] square bracket
   () parentheses
   {} braces or curly braces

   Array : storing a collection of multiple items under a single variable.
   mix of different data type
   array are zero based indexing.
    Array are not associative array so element cannot be accessed with arbitary string.
    Array copy Operation create a shallow copy, rather than deep copy.

    Shallow Copy
    A shallow copy of an object is a copy whose properties share the same references.

    Deep Copy 
    A deep copy of an object is a copy whose properties do not share the same references.
*/


let arry1  = [1,2,3,4,5];
// console.log(arry1);

// let arry2  = new Array(9,100,6,11);
// console.log(arry2);

//  Array are not associative array so element cannot be accessed with arbitary string.

// console.log(arry2["1"]); // 100
// console.log(arry2["one"]);  // undefined 

//  Array method

// Push (Add) ==> Add element in last position
// arry2.push(101)
// console.log(arry2);  // [ 9, 100, 6, 11, 101 ]

// pop method ==> remove element from last
// console.log(arry2.pop())  // 101

// unshift ==> people use rarely bcz it is time consuming operation
// Add at starting position of array 

// arry2.unshift(1000); // here if we see 1000 insert at first position so it will entire array
// console.log(arry2); // [ 1000, 9, 100, 6, 11 ]

// shift will remove from first element of array

let arry2  = new Array('TCS','HDFC','LNT');
// arry2.shift() //
// console.log(arry2); // [ 100, 6, 11 ]  ==> removede 9 from starting 

/* In array some are question method they will return as true or false  */

// console.log(arry2.includes(9));  //  return true

// IndexOf Methos will not return boolean value, 1 or -1 

// console.log(arry2.indexOf(100)); 

// let valueCheck = arry2.includes('TCS') 

// let valueCheck = arry2.indexOf('TCS');
// console.log(valueCheck);  // at position zero 

// Join in Array  it will return in string method

// let newArray =  arry2.join()
// console.log(typeof(newArray)); //  TCS,HDFC,LNT // return as a string format 


// slice and splice method
/* slice method  does not include lastIndex of element*/

console.log("Original Array",arry2); // Original Array [ 'TCS', 'HDFC', 'LNT' ] 
// console.log(arry2.slice(1,3))       //  [ 'HDFC', 'LNT' ]
// console.log(arry2.slice(0,2))       // [ 'TCS', 'HDFC' ]
// console.log(arry2.slice(2,3))       // [ 'LNT' ]

// Splice last Index Include 
// The splice() method overwrites the original array.
console.log("splice operation",arry2.splice(0,2))  // splice operation [ 'TCS', 'HDFC' ]

console.log("Original Array Splice",arry2);  

