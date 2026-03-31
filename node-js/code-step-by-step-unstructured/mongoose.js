const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/ecommerce");

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    category : String
})

const saveInDB = async() =>{
    const ProductModel =  mongoose.model('product',productSchema);
    let data = new ProductModel({
        name :'m8',
        price:10000,
        brand:'samsung',
        category:'laptop'
    });
    let result = await data.save();
    console.log(result)
}
    saveInDB();

    const updateInDb = async ()=>{
        const Product = mongoose.model('products',productSchema);
        let data = await Product.updateOne({name :'m8'},{$set:{price:700}});
        //console.log(data)
    }
    updateInDb()


    const deleteInDB = async () =>{
        const Product = mongoose.model('product',productSchema);
        let data  = await Product.deleteOne({name: 'max 8'})
       // console.log("deleted data",data)
    }

    deleteInDB()

    const findInDB = async () =>{
        const Product = mongoose.model('product',productSchema);
        let data  = await Product.find({name:'m8'})
        console.log("find data",data)
    }
    findInDB()


