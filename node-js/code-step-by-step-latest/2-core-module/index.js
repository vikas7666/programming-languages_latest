const fs = require('fs');
console.log("dir",__dirname); // dir D:\leaning\nodev2\code-step-by-step-v2\2-core-module

console.log("fileName =>",__filename); 
// fileName => D:\leaning\nodev2\code-step-by-step-v2\2-core-module\index.js

fs.writeFileSync("code.txt","some code")

/* 
Interview Question
1) is it possible to import only writeFileSync rather than whole fs module yes its possible 
const fs = require('fs').writeFileSync;

2) can i write in this way is it possible is okay => yes it will work

console.log("dirname__", __dirname)
const fs = require('fs');

3) is it compulsary to name fs variable name => No even if we write gs it will work
const gs = require('fs');

*/