const express =  require('express');
const path  =  require('path')

const app = express();
// app.get('',((req,res)=>{
//     res.send('<h1>This is Home Page<h1>')
// }))

// app.get('/about-us',((req,res)=>{
//     res.send(`
//     <input type="text" placeholder ="Enter a name" id="name" value="${req.query.name}">
//     <input type ="button" value="submit">`)
// }))
// app.get('/help',((req,res)=>{
//   //  let data =  req.query;
//     // console.log("Requested data is ",data)
//     // console.log('This is client send by browser',req.query)  // This is client sne by browser 'vikas'
//     // res.send('This is help page ' +req.query.name)

//     res.send({
//         name :'vikas',
//         email: 'anil@test.com'
//     })
// }))

// const publicPath = path.join(__dirname,'public');

// app.get('/home',(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/public.html`)
// })

// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
// })

//app.use(express.static(publicPath))

// ------------------------------------------ using View template 
 app.set('view engine','ejs')

app.get('/profile',(_,resp)=>{
    const user = {
        name : 'vikas shukla',
        email : 'vikas.shukla966@gmail.com',
        city : 'noida',
        skill : ['vikas','vipul','tall','short']
    }
    resp.render('profile',{user})
})

app.get('/login',(_,resp) =>{
    resp.render('login')
})

app.get('/header',((req,resp) =>{
    resp.resnder('common')
}))
app.listen(4200)