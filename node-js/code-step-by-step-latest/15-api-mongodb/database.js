const {MongoClient}  = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database  = 'ecommerce'

module.exports = async function dbConnect() {
    let result = await client.connect();  
    let db  = result.db(database);  // connect database
    return db.collection('products'); // collection name 
}

