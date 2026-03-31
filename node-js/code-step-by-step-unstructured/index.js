// const app = require('./app')
// // const fs  =  require('fs')

// const gz = require('fs').writeFileSync;

// // console.log(app.z())  // I am clling from app

// let arr = [1,4,6,8,9,12,15];

// let result = arr.filter((item) =>{  // filter 
//     return item === 4;
// })
// console.log(result)  // global module 

// // fs.writeFileSync("hello.txt", "code step by tep") // non global module

// console.log(__dirname)  //  D:\leaning\node
// console.log(__filename) // D:\leaning\node\index.js

// // other way while importing file

// gz('zyz.txt','hello')


// const { color, log, red, green, cyan, cyanBright, black } = require('console-log-colors');

// console.log(black('This is a green string!')); 


// const http = require('http');
// const data1 = require('./data')
// http.createServer((req,resp) =>{
// resp.writeHead(200,{'Content-Type': 'application\json'})

// resp.write(JSON.stringify({data1}));
// resp.end()
// }).listen(3000)


// console.log(process.argv)

// const fs = require('fs');

// const input = process.argv;

// if(input[2] =='add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2] =='remove'){
//     fs.unlinkSync(input[3],input[4])
// }else{
//     console.log('Invalid command')
// }

// Node JS in Hindi # 13 Asynchronous Programming Language

// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'files');
// console.log(dirPath)

// for (let index = 0; index < 5; index++) {
//   fs.writeFileSync(dirPath+ `/hello_${index} .txt`, "simple")
// }

// fs.readdir(dirPath,(error,files) =>{
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })



// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'laptop');

// console.log(dirPath)

// for(let i =0; i<5; i++){
//     fs.writeFileSync(dirPath+ `/lapp${i}.txt'`,'Hello vikas shukla');
// }



// const fs =  require('fs');
// const path =  require('path');
// const dirPath = path.join(__dirname,'crud');

// const filePath  = `${dirPath}/apple.txt`;

// // fs.writeFileSync(filePath,`Hi this is simple file system`)

// fs.readFile(filePath,'utf-8',((err,item)=>{
//     console.log(item)
// }))

// fs.appendFile(filePath,'and file nanme is apple.txt',(err)=>{
//     if(!err) console.log('file is updated')
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('file is renammed')
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)

// let a = 10;
// let b = 0;

// let resultData =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve(20)
//     }, 2000);
    
// })
// resultData.then((data)=>{
//     b = 20;
//     console.log(a+data);
// })

// console.log(a+b)
