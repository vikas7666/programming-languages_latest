const express =  require('express');
const app = express();
/* 
middleware is nothing but it will works as guard and it will check all req and resposne query 
*/

/* How to check this scenrio 
Hit in localhost
http://localhost:4570/user?age=1
*/

// To use middleware function we have to app.use()

/* But be careful it will apply for all the route by default bcz we have given app.use */

// app.use(filterQuery)

app.get('',(req,res) =>{
    res.send('Hello')
})

/* Here if we check we have not applied for home page we have just appalied  filterQuery to the user page  */

app.get('/user', filterQuery,(req,res) =>{
    res.send('This is user page ')
})

app.listen(4570);