const express = require('express');
const path = require('path')

const app = express();
const viewsPath = path.join(__dirname, 'views'); // Set the views directory


/* 
Now we are using ejs template 
npm i ejs

here if we check we have passed user object while rendering 

*/
app.set('view engine', 'ejs');  // compulsary

app.set('views', viewsPath);

app.get('/profile', (_, res) => {   // sending json data from server
    const user = {
        name : 'Vikas',
        surname : 'shukla',
        email : 'vikas.shukla966@gmail.com',
        skill  : ['HTML','CSS','JS','Java','PHP']
    }
    let userName = "vikas";
    res.render('profile',{user, userName},);
});

app.listen(5000)

/* 
Tag	Purpose	Escapes HTML?	Renders Output?
<%= ... %>	Outputs escaped content	
<%- ... %>	Outputs raw/unescaped 
<% ... %>	Executes JavaScript logic
*/