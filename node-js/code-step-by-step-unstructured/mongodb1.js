const dbconnect = require('./mongodb_connectiondb')

// dbconnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

//dbconnect();

// more modern way

const main = async ()=>{
    let data = await dbconnect();
   // data =  await data.find().toArray();
    // where condition in mongodb
    data =  await data.find({name:'accer'}).toArray();
    console.warn(data);
}

main() 