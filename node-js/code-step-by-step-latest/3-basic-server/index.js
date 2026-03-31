/* What is http 
    http request and response ko handle karata hai  
*/

const http =  require('http');
// cerateServer takes function as parameter such as req and resp
http.createServer((req, resp) =>{  
   //  resp.write('Hello This is vikas');
     resp.write('<h1>Hello Vikas</h1>');
     resp.end();
}).listen(4500);

// req suppose we want from url parameter   
// resp jo hum server se send karate hai 


// createServer ye whole function ko ek parameter jaise leta hai


/* function as parameter */

//es5
/* function functionASAparameter(req,resp){
    resp.write('Hello Vikas1');
    resp.end()
} */

// es6 
const dataControl = (re,resp) =>{
    resp.write('Hello Vikas2');
    resp.end()
}

 // here if we look createSever taken dataControl as function as parameter
 http.createServer(dataControl).listen(4500)

/* 
Notes & Interview Question
    createServer will take function as a parameter ?
    http.createServer(dataControl).listen(4500)
*/
