function setUsername(username){
    this.username = username;
    //console.log('hello')
}

function createUsername(username,email,password){
    // setUsername(username);  // by default here setUsername function not called to resolved 
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const chai =  new createUsername('vikas','shuklav@nseit.com','hello123');

console.log(chai); // createUsername { email: 'shuklav@nseit.com', password: 'hello123' }

/* 
createUsername {
  username: 'vikas',
  email: 'shuklav@nseit.com',
  password: 'hello123'
}

*/