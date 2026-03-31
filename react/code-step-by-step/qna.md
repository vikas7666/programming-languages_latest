

1) # How React laod files
// index.html 
Index.html has root element and all the code are goes to inside root element
=> main.jsx imported App.jsx

2) # we write react function name in capital letter?
Bcz html ke input small letter me hotaa hai and function Name Capital me 
so that hum log segregate kar sake 
suppose by e.g 

<>
<button>Hello Word</button>
<Button>Hello World</Button> // if we use small then react will confuse is it html or react
</>

3) # diff between function vs component
Component ka first letter capital hogaa otherwise o kaam nahi karega
function we always write in small letter.

ek page me muliple export nahi kar sakate ek export hogaa baaki named waale curly braces me karate hai 
import Login, {Logout,vikas} from './UserComponent'

option 1 :  Named + Default Export  => function Login() , export function Logout()
option 2 : Only Named Exports (no default) =>export function Login() export function Logout()

humloag variable ko bhi export kar sakata hai 

export const vikas = 'abc'

JSX stands for JavaScript XML
JSX (JavaScript XML) is a syntax extension to JavaScript

5) # onClick
js =>onclick  (no camel case)
react = > onClick (camelCase)

In react onClick need function defination not function calling 

onClick = {abc} => function defination 
onClick = {abc()} => function calling 

// why we are write in such way in react bcz first ye blank function ko call kar legaa then apanaa function if function pass karange abc() to ye diretly execute ho jaayega

onClick = {() => abc}

6) # Hook 
   hook are special feature for functional component
   hook are not work in class component

   hook let you use diffrent React feature 
   State
   Life cycle method
   Side effect etc

7) # Props

whats is props
Props are used to transfer the data from one component to another component
we can pass any number of data using props same as parameter

# Controlled Component 
A controlled component is a form whose input field is contolled by React states.

Single Source of truth
Validation and manipulation before submit
Dyanmic Update value

# Hooks

In old react version we were using class base component. (before 16.8)
Now class based component are not much used in react
So to achive State, life cycle, other feature in functional component we use hook.

popular Hook
useState(), useEffect, useContext, useref, usereducer, etc

# useEffect

1) Remove side effect from inside component and outside component
2) Use to fetch data
3) Can use as life cycle method 
4) Can use Dom manipulation 
5) Prevent Extra Rendering of component on state


useEffect(pass function as a parameter, dependency)

useEffect(()=>{
   // write your code 
},[])