const express =  require('express')
const app = express();
const filterQuery = require('./middleware')  // middleware file imported 
const route = express.Router();  // use route module so that we can taget whole router system

route.use(filterQuery)              /// given middleware to router function

console.log('filterQuery',filterQuery);

/* app.get('/*',(req,res,next) =>{
    res.send('About us')
})
app.get('/contact',(req,res,next) =>{
    res.send('About us')
})
*/
/* Here we have commented bcz now hum log har ek function pe jakar middle ware nahi denge 
 direct route ko import karke auth de sakate hai 
*/
route.get('/*',(req,res) =>{
    res.send('About us')
})
route.get('/contact',(req,res) =>{
    res.send('About us')
})

app.use('/',route)   /// given router to whole project

app.listen(4500);