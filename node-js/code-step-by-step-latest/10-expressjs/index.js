const express = require('express');
const app = express();

/* 
Can be say query param or parameter
    get method me first paramater jata hai route and one callback function which contain req, and resp

    req => We use when we want some input from browser by default server return even if we not use req method
    res => server send 

    ? we denotes as query parameter
*/



app.get('',(req,res) =>{
    // console.log("req sent by browser using query param?", req.query)
    // console.log("req sent by browser using query param?", req.query.name)
    //req sent by browser using query param? { name: '"vikas"', surname: '"shukla"' }
    // req sent by browser using query param? "vikas"
    // we can change req as a and res as b 
    // browser behaves as client as req and server behaves as respons

});

app.get('/about',(req,res) =>{
    //res.send('About us page')

    /* HTML */
    // res.send('hello Vikas here');
    // res.send('<h1>Hello Vikas Shukla</h1>')
      res.send(`<input type="text' placeholder ="Your name" value="${req.query.name }"  /> <button>Click me </button> <a href="/help"> Home</a>`)

     /* JSON  */
    //  res.send({
    //     name : 'vilkas',
    //     age : 28
    // })

    /* 
    {"name":"vilkas","age":28}
    */
})

app.get('/help',(req,res) =>{
    res.send('hello')

})
app.listen(5000)
