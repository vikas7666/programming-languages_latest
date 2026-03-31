// Object literal

// const user  = {
//     username : 'vikas',
//     login : 'yes',
//     getAllUser : function(){
//         console.log(this.username);
//         console.log(this) // this will print current context whole object
//     }
// }
 
// user.getAllUser(); // vikas

// We are printing this keyword at global context that's why we get empty object
// console.log(this)  // {}

// --------------------------------------- Constructor function

// New Keyword 
/* 
    1) Empty object create hota hai ==> called as instance  {}
    2) constructor function called hota hai bcz of new keyword
    3) jo bhi define hai o this keyowrd me inject ho jaata hai

// new keyword is nothing but constructor function
// from single object literal se multiple instance banaa sakate ho


 const date = new Date();
 const promise = new Promise();

// console.log(this)  // {} is nothing but blank object

function User(username, isLogin, loginAttempt){
    this.username = username;
    this.isLogin = isLogin;
    this.loginAttempt = loginAttempt;

    return this  // we can skip this also implicitily define hotaa hai
}

// const userOne = User('vikas',12,100);
// console.log(userOne);

// const userTwo = User('hello',12, false);
// console.log('userOne',userOne)


// Here if we don't use new keyword then value overwrite ho jataa hai 
// username: 'hello',
//   isLogin: 12,
//  loginAttempt: false

// To overcome this issue we use constructor function 

const userOne = new User('vikas',12,100);
const userTwo = new User('hello',12, false);


console.log(userOne)
console.log(userTwo)

/* User { username: 'vikas', isLogin: 12, loginAttempt: 100 }
User { username: 'hello', isLogin: 12, loginAttempt: false } */

// constructor property hoti kya hai hai kuch nahi bas references