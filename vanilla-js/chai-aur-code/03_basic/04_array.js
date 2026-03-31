const user = {
    name  : 'vikas',
    surname: 'shukla',
    welcomeMessage : function() {
        console.log(` ${this.name}, hello for login`);
        console.log('This refer as current context',this);
    }
}

// user.welcomeMessage()  //  vikas, hello for login

// user.name = 'John';

// user.welcomeMessage();  //  John, hello for login

// this always refer as current context 

/* 
 vikas, hello for login
This refer as current context {
  name: 'vikas',
  surname: 'shukla',
  welcomeMessage: [Function: welcomeMessage]
}
 John, hello for login
This refer as current context {
  name: 'John',
  surname: 'shukla',
  welcomeMessage: [Function: welcomeMessage]
}
 */

console.log(this);   // {}
// In node emvironment this always refer as empty object but in browser this always refer as window object

function WelcomeUser() {
    let username  = 'hello';
    console.log( this.username);
}
WelcomeUser()  //undefined

// Note **

// In function this keyword is not work but it will in objcet properly