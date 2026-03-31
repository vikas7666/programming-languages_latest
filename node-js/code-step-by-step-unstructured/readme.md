// filter 
filter hamesha array me lagayaa jataa hai o loop bhi in built karata hai usame parameter pass kaarte hai 

Jo file hame impport karane padate hai o non global moduele hote hai

https://youtu.be/T6S1-TuPBzg?list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At

http://localhost:4200/profile



mongodb

First, ensure that your MongoDB server is running. If it’s not, MongoDB Compass won’t be able to connect.

Open your command prompt or terminal and type  : mongod

1) mongod

 Connect to MongoDB 
 mongosh
 
 List MongoDB databases
 show dbs
 
Switching to a database
use product

// show collection
show collections

// create collection
db.createCollection('playlists');

// insert database in collection 
Database Name : ecommerce, collection : product
db.product.insertOne({name :'m-40',brand:'samusunf',country:'india'})

// how to find insert data in mongo
// show collection data
db.product.find()

// update command 
db.product.updateOne({name:'m-40'},{$set:{brand:'oppo'}})

// delete command

// MongoDB Node.js Driver
npm i mongodb
---------------------------------easy learn

database 
database inside having collection and each collection treat as object 


if we are using await then we have to make function async