const { MongoClient } = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
let database = 'ecommerce';
const client =  new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection  = db.collection('product');
    let resposne = await collection.find({}).toArray();
    console.log(resposne)
}

getData();