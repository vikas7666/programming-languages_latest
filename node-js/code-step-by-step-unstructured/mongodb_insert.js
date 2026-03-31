const dbconnect = require('./mongodb_connectiondb');


const insert = async ()=>{
   const db = await dbconnect();
   console.log(db);
//    const result = await db.insertOne({name:'s10',brand :'accer',country:'uk'})

   // how to insert multiple record

   const result = await db.insertMany([
    
    {name:'s10',brand :'accer',country:'uk'},
    {name:'s11',brand :'accer2',country:'uk'},
    {name:'s12',brand :'accer',country:'uk'},
    {name:'s13',brand :'accer',country:'uk'},

    ])
   console.log(result)

   if(result.acknowledged){
    console.log('data inserted successfully ===>')
}else{
    console.log('unable to send the data');
}
}



insert()