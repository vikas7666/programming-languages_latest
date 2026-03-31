// function Button() {
//     return <button onClick={() => console.log('hello')}>Click Me</button>
// }
// export default Button

// New ES6 way 
//  now import will become import {Button} from "./Button"

const Button = () => {
    return <button onClick={() => console.log('hello')}>Click Me</button>
}

export default Button