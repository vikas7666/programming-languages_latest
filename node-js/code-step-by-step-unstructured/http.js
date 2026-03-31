const http = require('http');

// http.createServer( (req,resp) =>{
//     resp.write('<h1>Hello this is vikas shukla</h1>');
//     resp.end()
// }).listen(4500);

function dataName(req,resp){
    resp.write('<h1>Hello this is vikas shukla11</h1>');
    resp.end()
}

http.createServer(dataName).listen(4500);

