const dbConnect = require('./mongodb_connectiondb');

const deleterecord  = async () =>{
    let data = await dbConnect();
    let result = await data.deleteOne({name : 'm-40'});
    console.log(result)
    if(result.acknowledged){
        console.log('record deleted')
    }
}

deleterecord()

// Note
// Suppose we are deleting data, but data is not there in db then ? we get error 
// no we will not get error only we get deletedCount: 0
//{ acknowledged: true, deletedCount: 0 } 