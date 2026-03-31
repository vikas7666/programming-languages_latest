// let myHero = ['spiderman','batman']

// let heroPower = {
//     thor :'hammar',
//     spideramn : 'sling',
//     getspiderman : function(){
//         console.log(`Spidy power is ${thor}`)
//     }
// }

// Yahaa pe by default ham logo ne obejct ke paas property inject kiya to sab object ke paas access hoga

// Object.prototype.hitesh = function(){
//     console.log(` Hitesh is present everywhere in all the object`);
// }

// heroPower.hitesh(); //  Hitesh is present everywhere in all the object

// myHero.hitesh();  //   Hitesh is present everywhere in all the object


// Yahaa pe by default ham logo ne array ke paas property inject kiya to sab array ke paas access hoga
// Array.prototype.heyVikas = function(){
//     console.log('Hey Vikas ')
// }

// myHero.heyVikas(); // Hey Vikas

// heroPower.heyVikas() //  Error : heroPower.heyVikas is not a function

// Inheritance

// __proto__ is outdated 

const user  = {
    username  : "chai",
    email  : "chai@gamil.com"
}
 
const Teacher  = {
    makeVideo : true,
}
const TeachingSupprt  = {
    isavialbale : false,
}

const TASupport = {
    makeassignment : 'JS assignment',
    fullTime  : true,
    __proto__: TeachingSupprt // here we are taking property of TeachingSupprt
}

// Teacher bhi user ki saari property acces kar sakata hai
Teacher.__proto__ = user;

// console.log('user',user);
// console.log('TASupport',TASupport);  // TASupport { makeassignment: 'JS assignment', fullTime: true }

// modern syntax

// TeacherSupport can acces Teacher property
Object.setPrototypeOf(TeachingSupprt,Teacher)

let myName = 'vikas';
let channer  = "chal      "


String.prototype.trulength = function(){
   console.log('Here this value is ',this);
   console.log('Actual logic',this.trim().length); 
}
myName.trulength();   // 5

"vikas111".trulength();  //Actual logic 8
 