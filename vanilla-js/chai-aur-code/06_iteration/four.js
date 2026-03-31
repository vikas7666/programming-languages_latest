// For In Looop 

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb  : 'ruby',
    swift : "swift by apple"
}

for (const key in myObject) {
   // console.log(`${key} and value is ${myObject[key]}`)
}

/* js and value is javascript
cpp and value is c++
rb and value is ruby
swift and value is swift by apple */

let programming = ['html','css','js','python'];

for(let key in programming){
    //console.log(`${key}`);
    console.log(`${programming[key]}`);
}


//console.log(`${key}`);
/* 0
1
2
3 */

//  console.log(`${programming[key]}`);
/* html
css
js
python */


const map = new Map();
map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr',"France");
map.set('In',"India") ; 


// is it work not 

for (const key in map) {
    console.log(map);
}