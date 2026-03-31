const { MongoClient } = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';
let database = 'ecommerce';
const client =  new MongoClient(url);

async function dbconnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('product');
}

module.exports  = dbconnect; // don't call function here just decalare focus while writing exports not export

 