const express = require('express');
require('./config');

const Product = require('./product');
const app = express();
app.use(express.json())
app.post("/create", async(req,resp) =>{
    // console.log(req.body)
    // resp.send("Done")
    let data = Product(req.body);
    let result  = await data.save();
    resp.send(result)
})

app.get('/list',async (req,resp) =>{
    let data = await Product.find();
    resp.send(data)
})

// ? why underscore id bcz database me keyname name _id hai
app.delete("/delete/:_id", async (req,resp) => {
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    resp.send(data);
});

// update query

app.put("/update/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await Product.updateOne(
        req.params,
        { $set: req.body }
    );
    resp.send(data);
});



//if delete ka option hai then postman me req.param me send karate hai 
// update karanaa hotaa hai then we will send in body 

//search 
app.get("/search/:key",async(req,resp) =>{
    console.log(req.params.key)
    let data = await Product.find(
        {
            "$or" : [
                { "name" : {$regex :req.params.key}},
                { "brand" : {$regex :req.params.key}}
            ]
        }
    )
    resp.send(data)
})

app.listen(5000)