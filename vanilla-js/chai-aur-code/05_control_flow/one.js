// if(2 === '2'){
//     console.log('hello');
// }

// switch(key){
//     case value:
//     break;

//     default:
//     break;
// }




const month = 3;

switch(month){
    case 1 :
    console.log('Devin is here');
    break;
    case 2:
    console.log('Devin Never go');
    break;
    case 3:
    console.log('Divin Never came')  // Divin Never came
    break;

    default:
    console.log('Kuch ho naa ho mai to hoga execute');  //Kuch ho naa ho mai to hoga execute
}

/*
3!=3
kya 3, 3 ke barabar nahi hai 
3!=2
kya 3 2 ke barabar nahi hai 

*/

// false value 

// false, 0 , -0, BigInt, 0n, "", null, undefined, NaN

// truthy Value

// "0", 'false', " ", [], {}, function() {}

// How to check if array is empty 
// if(userEmail.length ===0){
//     console.log("Array is empty");
// }
// how to check if object is empty and object keys and kyes having length is 0

// It will return in array format

// if(Object.keys(emptyObj).length ===0){
//     console.log("Object is empty");
// }

// Nullish coalescing operator (??) : null undefined 

let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10;  // 10
val1 = undefined ?? 10;  //10

val1  = null ?? 10 ?? 20  // 10 will take first value

console.log(val1);  // 10 bcz nullish value will be not considered 

// Terniary operator

// condation ? true : false

const iceTea =  100;

iceTea >= 80  ? console.log('IceTea is greateer than 80 ') : console.log('Ice Tea is less than 80');

// IceTea is greateer than 80 


