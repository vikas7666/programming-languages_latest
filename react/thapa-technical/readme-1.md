React main page is Index.html 
Index.html => having main.jsx component 
<div id="root"></div>

main.jsx => createRoot(document.getElementById('root')).render  => App Component
App Component 
In app component we can render any our componet 

React component function must decalre in this way and need compulsary return statment 

// exporting default app component so that we can use any where in our project

** We need compulsary one Parent div where we can wrap our 
export const App = () => {
return(

)
}