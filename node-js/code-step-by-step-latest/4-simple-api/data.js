/* 
    if we have single data then object is okay but if we have multiple data then we will take object into array
*/

const data = [
    { name : 'Vikas Shukla', email : 'anil@test.com'},
    { name : 'Hello', email : 'anil@test.com'},
    { name : 'demo', email : 'anil@test.com'},
    { name : 'Dell', email : 'anil@test.com'}
]
module.exports = data;


console.log('data=>',data)
// Now data object contain 
/* 
data=> [
    { name: 'Vikas Shukla', email: 'anil@test.com' },
    { name: 'Hello', email: 'anil@test.com' },
    { name: 'demo', email: 'anil@test.com' },
    { name: 'Dell', email: 'anil@test.com' }
  ] */