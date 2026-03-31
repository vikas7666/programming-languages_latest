/* Singleton Object */

// let obj1 = new Object()
// console.log(obj1);   // {}

// Object literal or normal object
// let obj2  = {}  // {}

const regularUser = {
    name : 'vikas',
    obj3  : {
       surname : 'shukla'
    },
    obj4  : {
        name : 'om'
    }
}

// console.log(regularUser);  // { name: 'vikas', obj3: { name: 'vipul' }, obj4: { name: 'om' } }

// console.log(regularUser.name,regularUser.obj3.name);  // vikas vipul

// if we want protection more then we add ? if data hai to dikhao other not,
// console.log(regularUser.name,regularUser.obj3?.name1); 

let obj1  = {1 : "a", 2: "b",}
let obj2  = {3 : "c", 4: "d",}

let total = {obj1, obj2}   

// console.log("basic way but issue",total); 

//  same problem as array like 
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// obj3  = Object.assign({}, obj1, obj2)

// console.log("Object Assign",obj3);  // Object Assign { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//  Spread Operator (Mostly used)

obj3 = {...obj1, ...obj2}
// console.log('Spread Operator',obj3);  // Spread Operator { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


/* ******************  Most Important  **********************/

// console.log(Object.keys(regularUser)) 
// console.log(Object.values(regularUser)); 
// console.log(Object.entries(regularUser)); 

// data we get in array format  // [ 'name', 'obj3', 'obj4' ]

// console.log(regularUserObject);
// [ 'vikas', { surname: 'shukla' }, { name: 'om' } ]

/*
[
  [ 'name', 'vikas' ],
  [ 'obj3', { surname: 'shukla' } ],
  [ 'obj4', { name: 'om' } ]
]

*/


console.log(regularUser.hasOwnProperty('vikas'));  // false

