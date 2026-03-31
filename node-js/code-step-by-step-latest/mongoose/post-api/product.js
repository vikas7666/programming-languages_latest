const mongoose = require('mongoose');
// table => collection

// Created Schema 
const productSchema =  new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    category : String
})

// export schema 
module.exports = mongoose.model('products',productSchema)