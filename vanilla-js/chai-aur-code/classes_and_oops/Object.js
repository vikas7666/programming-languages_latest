
// Whole Things is about new Ky

/* function multiplyby5( num){
    return num *5
}

multiplyby5.power = 2
console.log(multiplyby5(5))     // 25
console.log(multiplyby5.power)  // 2

console.log(multiplyby5.prototype); */  // {}  ye by default us method ka this hai 

// 

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.printMe = function(){
    console.log('Price is ',this.score);
}
createUser.prototype.increment = function(){
    score ++;
}


const chai =  new createUser('chai',25)
const tea =  createUser('tea',250)


chai.printMe()  // Price is  25