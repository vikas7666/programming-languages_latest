const {MongoClient}  = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database  = 'ecommerce'

// data ko return hone me time lagataa hai esliye hum logo ne async and await use kiya to handle promise 
async function getdata() {
    let result = await client.connect();  
    let db  = result.db(database);  // connect database
    let collection = db.collection('products'); // collection name 
    // let response =  await collection.find({}).toArray()  // find method to get data and toArray used for readblity

    // if we want single data then we cam use 
    let response =  await collection.find({name: 'm-43'}).toArray();  // This is also called as where query

   /*  resposne [
        {
          _id: new ObjectId('6782433e769f186f7207da4e'),
          name: 'm-43',
          brand: 'Nokia',
          proce: '32'
        }
      ] */

    console.log('resposne',response);
    
}
getdata();

/* 
    can we connect 2 database at single time yes
*/