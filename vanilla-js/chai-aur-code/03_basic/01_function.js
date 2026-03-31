
// function defination
// function hello (){
//     console.log(1);
//     console.log(1);
//     console.log(1);
//     console.log(1);
// }
// // hello ==> function reference
// hello()  // ==> parantherise is term as function execute


/*     function addTwoNumber(num1,num2){
        console.log(num1 + num2);
    } 
*/

function addTwoNumber(num1,num2){
   // let valueResult  = num1 + num2;
   //return valueResult;

   // better way write a code 
   return num1 + num2;  // also optimzed variable
   console.log('vikas');  // unreachable code bcz we have declare a return
}
// addTwoNumber(2,3)   // 5 we are passing arguments

// Now we arestoring value in result 

// let total = addTwoNumber(5,3)  // 8

// console.log("total",total);

/* 8            
total undefined */  // here we get undefined bcz function is not returing anything

// total 8 Now we get reult bcz we have returned from function

/* function loginUser(username) {
    return `${username} User Just Logned In `
}
 */
// console.log(loginUser('vikas'));  // vikas User Just Logned In 

// console.log(loginUser(''));  // User Just Logned In 
// console.log(loginUser());  //   undefined User Just Logned In 


/*  ************************** Important Note
 "" // false
    undefined  // false 
*/
// How to tackle undefined never came for this approch make sure we will defined some value 

function loginUser(username = 'vikas' ) {
    // if(username === undefined){
    //     console.log('Please enter a username')
    //     return
    // }

    //  we write better way on above code 
    if(!username){
        console.log('Please enter a username')
    }
    return `${username} User Just Logned In `
}



console.log(loginUser());

// Please enter a username
// undefined


// Here we have defined some value

// vikas User Just Logned In (bcz we have passed some value default )
