// class User{
//     constructor(username,email,password){
//         this.username =  username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai  = new User('vikas', 'shuklav@nseit.com','def')

// console.log(chai.encryptPassword());  // defabc
// console.log(chai.changeUsername());  // VIKAS

// behind the scene if classes was not available


function User(username,email,password){
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function(){
    return `${this.username}`
}
User.prototype.uppercase = function(){
    return `${this.username.toUpperCase()}`
}

let chai = new User('hello','abc@gmail.com','sdbhsjd');

console.log(chai.encryptPassword());  // hello

