const {MongoClient}  = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database  = 'ecommerce'

module.exports = async function dbConnect() {
    let result = await client.connect();  
    let db  = result.db(database);  // connect database
    return db.collection('products'); // collection name 
}

// console.warn(dbConnect())  // Promise { <pending> }

// Now handle promise bcz function returning promise

// here if we look carefuly we have to promise one bcz of db connection and another one is due to toArray method
// dbConnect().then((response) =>{
//    response.find().toArray().then((data)=>{
//         console.log(data)
//    })
// })

   /* 
   Result return
   Promise { <pending> }
[
  {
    _id: new ObjectId('6782433e769f186f7207da4e'),
    name: 'm-43',
    brand: 'Nokia',
    proce: '32'
  }
]
   */