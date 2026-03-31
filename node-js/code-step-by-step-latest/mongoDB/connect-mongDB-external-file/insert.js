const dbConnect = require('./database')

const insert = async(data) =>{
    const db = await dbConnect();  // connect database

    // for single record 
    /* const result = await db.insertOne({
        name:'m-44',
        brand :'Nokia',
        price : 3000
    }) */
    // console.log('result',result);

    const result = await db.insertMany(
       [
        { name:'s21',brand:'namo',price:'100'},
        { name:'s22',brand:'namo',price:'4000'},
        { name:'s23',brand:'namo',price:'400'}

       ]
    )
    /* 
    result {
        acknowledged: true,
        insertedId: new ObjectId('678269615369b0654cda7b8f')
    }
    */
    
}
insert()

