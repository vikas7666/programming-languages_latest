let dbConnect =  require('./mongodb_connectiondb');

const deleteData = async() =>{
    let data = await dbConnect();
    let result = await data.deleteMany({name : 'max pro 51'});
    console.log(result)
    if(result.acknowledged){
        console.log('deleted successfully')
    }
}

deleteData()