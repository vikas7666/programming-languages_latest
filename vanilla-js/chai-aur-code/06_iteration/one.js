// for(let i=0; i<10; i++){
//     if(i==5){
//         console.log(i," is best number")
//     }
//     console.log(i)
// }



// for(let i = 1; i<=10; i++){
//     console.log(`Outer loop value ${i}`)
//     for(j=1;j<=10; j++){
//        // console.log(`Inner loop value ${j} and inner loop ${i}`)
//        console.log( i + '*' +j + ' = ' + i*j);
//     }
// }
// let myArray = ['flash','batman','superman']

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Value of i is ${index}`);  //Value of i is 5
//         break;
//    }
//    console.log(`Value of i is ${index}`);  //
// }

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Value of i is 5

/* continue will allow only once a time */

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected ${index}`);  //Value of i is 5
        continue;
   }
   console.log(`Value of i is ${index}`);  //
}

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6
// Value of i is 7
// Value of i is 8
// Value of i is 9
// Value of i is 10