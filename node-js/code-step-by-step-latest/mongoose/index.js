// field => schema 
// model => schema ko use karke mongodb se connect karataa hai
const mongoose = require('mongoose');

const main = async() =>{
    await mongoose.connect('mongodb://localhost:27017/ecommerce');

    // Created schema 
    const ProductSchema = new mongoose.Schema({
        name :String,
        price :Number,
        brand : String,
        category :String
    })

    // created model and connected with schema  and model
    const ProductModel = mongoose.model('product',ProductSchema);

    const saveInDB =  async () =>{
        let data = new ProductModel(
            {
                name :"m8",
                price:1000,
                category:"mobile",
                brand:'sansui'
            });
        let result  = await data.save();
        console.log("saveInDB", result)
    }

    const Product = mongoose.model('product',ProductSchema);
    console.log('Product',Product)

    const updateInDB = async ( ) =>{
        
        let data = await Product.updateOne(
            {name : 'm-44'},
            {$set : {name :'vikas'}},
        )
        console.log("updateInDB", data)
    }
    
    const findInDB = async() =>{
        let data = await Product.find({name: 's11'});
        console.log('findInDB',data);     
    }
    saveInDB()
    updateInDB()
    findInDB()

}

main()