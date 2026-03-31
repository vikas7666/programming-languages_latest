module.exports = filterQuery = ((req,res,next) =>{
    
    if(!req.query.age){
        res.send('Please Provide an age')
    }else if(req.query.age < 18){   /* http://localhost:4570/user?age=1 */
        res.send('Your age is less than 18 hence you cannot access it')
    }else{
        next();
    }
})

// Wasted 2 hour bcz of s keyword 
// module.exports