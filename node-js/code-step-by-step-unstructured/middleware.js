const express =  require('express')
const app =  express()

const reqFilter = require('./middlware_route')

const route =  express.Router();

//  app.use(reqFilter) Application middleware route

route.use(reqFilter);

route.get('/',(req,resp)=>{
    resp.send('Weclome to home page ')
})

route.get('/user',reqFilter,(req,resp)=>{   // routeLevel middleware based on specific page
    resp.send('Weclome to home page ')
})

app.get('/home',(req,resp)=>{
    resp.send('Weclome to home page ')
})

app.use('/',route)

app.listen(5000)