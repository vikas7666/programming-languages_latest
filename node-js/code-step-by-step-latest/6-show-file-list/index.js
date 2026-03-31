const fs = require('fs');
const path = require('path');

// console.log(path)  // Path is whole object

const dirPath = path.join(__dirname,'files/'); // if not join and only use __dir then current folder exclude
console.log('dirPath',dirPath);

for(let i = 1; i<= 4; i++){
   fs.writeFileSync(dirPath+"hello"+i+".txt", "We are sharing a common termonology")
}

// console.log('dirPath',dirPath);
//dirPath D:\leaning\nodev2\code-step-by-step-v2\6-show-file-list


// Here we have read whole directory rather than 
fs.readdir(dirPath,(err,files) =>{
    files.forEach((item) =>{
        console.log(item)
    })
})


/* 
We can access folder inside web server only not from C drive or any other folder.

*/