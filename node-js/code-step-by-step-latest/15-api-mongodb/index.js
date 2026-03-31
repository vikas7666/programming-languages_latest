/* 
    Basically we have 4 types of api such as get post delete put => put means update
*/

const express  =  require('express');
const app = express();
let dbConnect  =  require('./database');
const mongodb = require('mongodb')

let dbconnect1 = async() =>{
    let db = await dbConnect();
    let result = await db.find().toArray();
    //console.log(result);
    return result; 
}  

app.use(express.json());

app.get('/',async(req,res) =>{
    let data = await dbconnect1(); // Await the result of dbconnect1
    res.send(data);
})

// In post or get we can put root url 
// app.post('/',(req,res) =>{
//     console.log("req.body",req.body);
//     res.send(req.body)
// })


// Now we are storing data in database
// if we are storing single object then inserOne method use but if we are storing multiple then insertmany used
app.post('/',async(req,res) =>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result)
})


// Put method 
// we can use post and put method for data change but put recommended hai 

// app.put('/',async (req,res) =>{
//     let data = await dbConnect();
//     let result  = await data.updateOne(
//         {name : req.body.name},
//         {$set : req.body}
//     )
//     res.send(result)
// })

// suppose we want to upadte name in json using param
app.put('/:name',async (req,res) =>{
    let data = await dbConnect();
    let result  = await data.updateOne(
        {name : req.param.name},
        {$set : req.body}
    )
    res.send(result)
})

/* Delete Method  */

app.delete('/:id',async(req, res) =>{
    let data = await dbConnect();
    console.log('req.param.id',req.params.id);
    let result  = await data.deleteOne({_id: new mongodb.ObjectId (req.params.id)})
    res.send("done") 
})

// make separte code 
app.get('',async(req,res) =>{
    let db = await dbConnect();
    let result = await db.find().toArray();
    result.forEach((item) =>{
        res.send(`<li>${item.name}</li>`)
    })
    
})


/* 
    can we pass get method inside body => NO

*/

app.listen(5000)