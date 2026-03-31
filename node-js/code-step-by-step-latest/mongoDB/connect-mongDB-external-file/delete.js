const database = require('./database');

const dbConnect = async()=>{
    let connect = await database();
    let result  = await connect.deleteOne({
        name :'m-11'
    })
    if(result.acknowledged){
        console.log('record deleted successfully');  // record deleted successfully
    }
    if(result.deletedCount){
        console.log('record deleted successfully');  // record deleted successfully
    }
}
dbConnect()

/* 
How to check if data is not there in database if we deleted will it throw an error
No it will not throw an error it will say deletedCount is 0

*/