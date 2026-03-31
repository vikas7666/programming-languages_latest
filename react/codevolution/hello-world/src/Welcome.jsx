// function Welcome() {
//     return <h1>Hello</h1>
// }

// export default Welcome

// New ES6 way 

// we can pass any javascript value
export const Welcome = (props) => {
    console.log('props', props)
    return <h1>Hello {props.name} {props.alias}</h1>
}

// Case 1 :
// export default Welcome => Then we can change name of componenent while importing

// Case 2:
// export const Welcome = () => {} => now we have to follow same as required
