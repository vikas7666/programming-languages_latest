const http = require('http');
const data = require('./data')


http.createServer((req,res) =>{
    // res.write('Hello');
    /* 
        we have number of server status such as 201, 404, 403, 500 etc everyone used their scenrio
    
    */
    res.writeHead(200, {'Content-Type' : 'applicatio,\json'})
   // res.write(JSON.stringify({name : 'Vikas Shukla', email:'vikas.shukla966@gmail.com'}))

    res.write(JSON.stringify(data))

    /* 
        [{"name":"Vikas Shukla","email":"anil@test.com"},{"name":"Hello","email":"anil@test.com"},{"name":"demo","email":"anil@test.com"},{"name":"Dell","email":"anil@test.com"}]
    
    */

    /* without stringify 

    res.write(`{name : 'Vikas Shukla', email:'vikas.shukla966@gmail.com'}`)
         {name : 'Vikas Shukla', email:'vikas.shukla966@gmail.com'} 
     */

   /* With stringify 
         {"name":"Vikas Shukla","email":"vikas.shukla966@gmail.com"}
   */

    res.end();  // it is compulsary if we not write resp.end() then server will running and running no op

}).listen(4600)

/* 
    If we want something then we will take req 
    if we want to send somthing then we will use res.send()
    But here we will make an API then we will write respHeader as we have to send data in resp header
    
*/