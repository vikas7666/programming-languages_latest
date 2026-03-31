document.getElementById('title')
// <h1 id="title"  class="heading">Dom Learning</h1>

document.getElementById('title').id
// 'title'

document.getElementById('title').className
// 'heading'

document.getElementById('title').class
// undefined

document.getElementById('title').getAttribute('id')
// 'title'

document.getElementById('title').getAttribute('class')
// 'heading'

document.getElementById('title').setAttribute('class', 'test')
// undefined but it will replace current class name, title => test

document.getElementById('title').setAttribute('class', 'test heading')
// undefined but className ==> test heading

title.style.backgroundColor ="green"
// 'green'

title.style.padding ="10px"
'10px'

title.style.borderRa ="10px"
'10px'

/* Imp  why below all are same */
title.innerHTML
'Dom Learning'

title.textContent
'Dom Learning'

title.innerText
'Dom Learning'

/* diff textContent & innerText */

// In h1 tag after adding sapan and display none property 
title.textContent  // will show all the text even if it hidden by css
'Dom Learning test text'

// In h1 tag after adding sapan and display none property 
title.innerText
'Dom Learning'

// title.innerHTML ( Will show html also)
// 'Dom Learning <span style="display: none;">test text</span>'

// Query selector

document.querySelector('#title')
{/* <h1 id="title" class="heading" style="background-color: green;">Dom Learning <span style="display: none;">test text</span></h1> */}

document.querySelector('#title').style.backgroundColor= 'red';
document.querySelector('.heading').style.backgroundColor= 'green';

document.querySelector('input[type="password"]')

document.querySelector('ul li:first-child')

// Query Selector All 
// Query selector all is same as array but but having some diffrence

let listItem = document.querySelectorAll('li')
listItem[1].style.backgroundColor = 'orange'

// for each loop in query selector

listItem.forEach( (l) => {
    l.style.backgroundColor ='red'
})

/* how to convert nodelist into arraylist   */

Array.from(listItem)

listItem.forEach( (item) =>{
    item.style.color = 'orange'
})

item.forEach( (item) =>{
    item.style.backgroundColor ='orange';
    item.innerText = 'vikas';
     item.style.color ='blue';
    
})