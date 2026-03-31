const dbConnect =  require('./database');

const main = async() =>{
    let data = await dbConnect();
        data = await  data.find().toArray();  
    console.log('data',data);
    
}
main()

/* 
// output 
data [
  {
    _id: new ObjectId('6782433e769f186f7207da4e'),
    name: 'm-43',
    brand: 'Nokia',
    proce: '32'
  }
]

*/