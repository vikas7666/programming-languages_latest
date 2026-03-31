// for each js 
const coding = ["js","ruby","python","cpp"]

// coding.forEach( function(val){
//     console.log(val)
// })

// Using Arrow function ES6
// we can pass argument, index and whole array
coding.forEach( (item, index, arr) =>{
    console.log(item,index,arr);
})

// js 0 [ 'js', 'ruby', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'python', 'cpp' ]
// python 2 [ 'js', 'ruby', 'python', 'cpp' ]
// cpp 3 [ 'js', 'ruby', 'python', 'cpp' ]


//  Can we pass function ==> Yes

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme);
// js
// ruby
// python
// cpp




const myCoding  = [
    {
        languageName : "Javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "js"
    },
    {
        languageName : "python",
        languageFile : "js"
    },
]

myCoding.forEach( (item ,index ) =>{
    // console.log(item, index)
    console.log(item.languageName)
})

/* { languageName: 'Javascript', languageFile: 'js' } 0
{ languageName: 'java', languageFile: 'js' } 1
{ languageName: 'python', languageFile: 'js' } 2 */


/* Javascript
java
python */