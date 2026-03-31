{} // its called scope

/* function one() {
    const username  = 'vikas';

    function two() {
       // const nameTwo  = 'hello'
        console.log('username is',username);
    }
    two()
    console.log(nameTwo)
}
one() */ // username is vikas
// here we get error bcz one cannot access inside function two


// function expression 
// In js variable is very power it can hold anything such as json etc

// const abc  = function name() {
//     console.log('hello')
// }

// abc() // hello

//console.log('function calling before declaration',vikas('abc'));
// function vikas(num) {
//     console.log('num',num)
//     return  num ;
// }
// num abc
// function calling before declaration abc

// console.log(addTwo(5,6)); //11
// console.log(x(5,6));
/* const x = function addTwo(num1,num2) {
    let x = 'vikas';
    console.log('x',this.x) // undefined in function expression also this not work only in function work
    return num1 + num2;
}
console.log(x(5,4))  // 9 */

// getting error  ReferenceError: addTwo is not defined if we called using function variable, top of the baove function

/* --------------------  Arrow function ---------------------- */

const num =  function () {
    let username = 'vikas';
    console.log('username',this.username);
}
// num()  // username undefined 

// Writing above function in ES6

/* const num2 = () =>{
    let username = 'ES6 username';
    console.log('usernameES6',this.username);
}
num2()  // usernameES6 undefined */

// In ES6 pass an arguments

// const num2 = (num1,num2) =>{
//     return num1 + num2;
// }
// console.log(num2(3,4));  //7

// Implicit return 
// In implicit return we don't need of curly braces in function and return statement 
// maine maan liya ki aapka ek hi line ka code hai 

// {} ==> return compulsary 
// ()  ==> no return keyword 


// const num2  = (num1, num2) => (num1 + num2);  // omit return keyword  curly braces
// console.log(num2(4,5));  // 9 

// // Explicit return
// // when we explicitly use return keyword 

// const num3  = () => ({name : 'hello'});

// console.log('num3',num3())  // num3 { name: 'hello' }


function chai(){
    console.log('DB connected')
}
chai(); // DB connected

// USing Immidiated Invoke function 

(function aurcode(){
    console.log('DB data instterted'); // DB data instterted
})();

// using es6 
(function aurcode(){
    console.log('DB data instterted'); // DB data instterted
})();

(()  =>{
    console.log('DB data instterted222'); // DB data instterted222
})();

((name)  =>{
    console.log(`DB data instterted222, ${name}`); // DB data instterted222, vikas
})('vikas')