// const promiseOne  = new Promise(function(resolve, reject){
//     // Do async task
//     // DB Call

//     setTimeout(function(){
//         console.log('Async Task completed')
//     },1000)
//     resolve()
// })


// promiseOne.then(function(){
//     console.log('Promise consumed')
// })


// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('function started')
//         resolve()
//     }, 1000);
// }).then(function(resolve,reject){
//     console.log('Async called ')
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: 'viaks',surname:'shukla'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user) // { username: 'viaks', surname: 'shukla' }
// })


// const promiseFour  = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(error){
//             resolve({username:'vikas',password : 123})
//         }else{
//             reject('Error Something Went Wrong')  // Error Something Went Wrong
//         }
//     }, 1000);
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user;
// })
// .then( (user) =>{
//    console.log(user.username)
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log('The promise is either resolved or rejected')
// })

/* { username: 'vikas', password: 123 }
vikas */

// const promiseFive  = new Promise( function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve('Prmise resolved')
//         }else{
//             reject('Promise reject')
//         }
//     }, 1000);
// })


// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log('response',response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive() 

// Promise reject



// async function getAllUser(){
//     const response  =  await fetch('https://jsonplaceholder.typicode.com/users');
//     const data  = await response.json();
//     console.log(data)
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) =>{
    return response.json();
})

.then((data) =>{
    return data;
})
.then((data) =>{
    console.log(data)
})
.catch( (err) =>{
    console.log(err)
})