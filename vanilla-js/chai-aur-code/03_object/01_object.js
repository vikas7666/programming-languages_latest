/* --------- singleton  -----------
1) If we declare literal then singleton nahi banata 
2) if constructor se banegaa then haa Hamesha singleton banega

Object.create  // singleton
create se hi constructor method banata hai 
*/

// Object literals

const mySymbol = Symbol('key1') // here we have defined symbol as a key & defined in object

// console.log(mySymbol); // Symbol(key1)

const jsUser  = {
    name : 'vikas',
    age : 27,
    location: 'mumbai',
    email : "vikas.shukla966@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday"],
    "full Name"  : "Vikas Shukla ",
    [mySymbol] : "hello"
}

// Behind the seen object key treat as string 

// we can access object in two ways

// console.log(jsUser["name"]);  // vikas but here we don't have dot notation

// why above method is useful

// console.log(jsUser["full Name"]);   // Vikas Shukla 

// console.log("Symbol Access way", jsUser[mySymbol]);  // hello 

// here we are freezing object value
// Object.freeze(jsUser)

jsUser.email = 'shukla.vikas966@gmail.com';
// console.log(jsUser);

/*
{
  name: 'vikas',
  age: 27,
  location: 'mumbai',
  email: 'vikas.shukla966@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Tuesday' ],
  'full Name': 'Vikas Shukla ',
  [Symbol(key1)]: 'hello'   // this is symbol 
}
*/
// Here if we are changing then value then also value is not changing

// jsUser.greeting  = function() {
//     console.log('hello')
// }

// Here we are giving function as reference
// console.log(jsUser.greeting); // [Function: name]

// String interpolation

jsUser.greeting2 = function() {
    console.log(`hello js user ${this.name}`)
}

console.log(jsUser.greeting2());  

// hello js user vikas
// undefined