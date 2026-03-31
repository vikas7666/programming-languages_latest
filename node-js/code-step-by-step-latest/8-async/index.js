/* 
    What is drawback of async language 
    we get output such as 
    20 , 30
*/

let b = 20;
let a  = 20;

/* setTimeout(() => {
    b = 30;
    console.log(a +b)
}, 2000);

console.log(a + b)   */

// How to resolve this issue we can resolve using promise 
let waitingData =  new Promise((resolve, reject) =>{
   setTimeout(()=>{
    resolve(30)  // in resolve function we can pass anything such as array object 
   },2000)
})  

waitingData.then((data)=>{
    b = data;
    console.log(a+b)
})

// output is 50, waited more than 
