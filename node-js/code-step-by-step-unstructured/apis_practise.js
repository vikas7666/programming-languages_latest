const express = require('express');
const dbConnect  = require('./mongodb_connectiondb');

const app =  express();

app.get('/', async (req,resp) =>{
   let data = await dbConnect();
   data =  await data.find().toArray();
   resp.send(data)
})

app.listen(5000)
