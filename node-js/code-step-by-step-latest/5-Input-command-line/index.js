const fs = require('fs')  // imported file system

// console.log(process.argv[2])  // hello

/* args full form=> argument vector 
  How hello came => hello came from 
  before executing file we have pass hello in command line 
  nodemon .\5-Input-command-line\index.js hello */

/* 
Output given 2 path one where is node and 2nd one from where we are executing our code 
Output => console.log(process.argv)
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\leaning\\nodev2\\code-step-by-step-v2\\5-Input-command-line\\index.js'
]
*/


/* 
process is an object which contain whole things
console.log(process.args)

*/


// section 2

let input  = process.argv;
let filePath = __dirname;


// fs.writeFileSync(filePath + '/' +input[2], input[3])

// console.log(__dirname)  // D:\leaning\nodev2\code-step-by-step-v2\5-Input-command-line

// file add remove functionality 

if(input[2] =='add'){
    fs.writeFileSync(filePath + '/' +input[3], input[4])
}else if(input[2] == 'remove'){
    fs.unlinkSync(filePath + '/' +input[3])
}else{
    console.log("You are Providdeing wrong input")
}



/* 
  command executed for creating and non creating file in command line 

  node .\5-Input-command-line\index.js remove hello
  node .\5-Input-command-line\index.js add  hello

*/