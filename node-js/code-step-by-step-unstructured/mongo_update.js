let db = require('./mongodb_connectiondb');

let update = async () =>{
    let data = await db();
    
    // for single record
   // let result = await data.updateOne({name:'m-40'},{$set:{name:'max pro 5'}})

    // for multiple record
    let result = await data.updateMany({name:'max pro 5'},{$set:{name:'max pro 51'}})
    console.log(result)
}
update()