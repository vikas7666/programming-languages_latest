const express = require('express');
// EventEmitter ek class hotaaa hai 
const EventEmitter =  require("events");
const app =  express()
const event  = new EventEmitter();


let count = 0;

event.on("counterAPI", () =>{
    count++;
    console.log('Event Called',count);
})

app.get("/",(req,res) =>{
    res.send('api called ')
    event.emit("counterAPI")
})

app.get("/search",(req,res) =>{
    res.send('api called ')
})


app.get("/update",(req,res) =>{
    res.send('api called ')
})


app.listen(5000)