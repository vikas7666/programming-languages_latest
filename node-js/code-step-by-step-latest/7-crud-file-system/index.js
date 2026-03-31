/*  CRUD
Create Read Update Delete
*/

const fs  = require('fs');
const path = require('path');
const dir = path.join(__dirname,"crud");
const filePath = `${dir}/hello.txt`

// console.log('dir___',dir)

// fs.writeFileSync(filePath,`Hello this is crud operation1`);

fs.readFile(filePath,'utf-8',(err,item) =>{
    console.log(item); 
    // we get output as if we don't add utf-8 <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 63 72 75 64 20 6f 70 65 72 61 74 69 6f 6e>

    // after adding uts-8 we get ouput properly
    // Hello this is crud operation

    /* How to append in a file */

    /* fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
        if(!err){
            console.log('file is updated')
        }
    }) */

    // file name is updated 
    fs.rename(filePath,`${dir}/fruit.txt`,(err)=>{
        if(!err){
            console.log("file name is updated")
        }
    })

    // fruit.txt file get deleted 
    fs.unlinkSync(`${dir}/fruit.txt`);

})


/* 
    What is buffer 
    Buffer meaning temporary memory location

*/