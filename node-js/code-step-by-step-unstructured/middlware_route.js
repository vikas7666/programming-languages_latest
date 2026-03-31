

module.exports = reqFilter = (req, resp, next) =>{
    console.log('reqFilter',reqFilter)

    if(!req.query.age){
        resp.send('Please Provide an age ')
    } else if(req.query.age < 18){
        resp.send('Access denied')
    }else if(req.query.age > 18){
        resp.send('<h1>You can access this page Enjoy: </h1>')
    }else{
        next()
    }
    
}