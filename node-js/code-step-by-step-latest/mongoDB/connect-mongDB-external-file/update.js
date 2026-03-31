const dbConnect =  require('./database');

const dbconnect  = async() =>{
    let connect = await dbConnect();
    let result  = await connect.updateOne(
       { name :'s23'}, {$set:{ name: 's-24'}}  
    );
    console.log(result);
    // s23 modified as s24   
}

dbconnect()

/* 
If we have similar name and we update then which one update?
 first come first one will update
 e.g vikas ka name 3 times hai table ke entries me first one update hoga

*/