import { useState } from "react";

export const Counter = () => {

    // currentValue , setFunction = useState(intiaValue)
    // currentValue , setFunction = useState(fn)

    // below syantax is called destructuring 
    // const [count, setCount] = useState(0);

    // when to use below code when we are calling from an api or saving into local stoarge at that time we have to use it.

    const [count, setCount] = useState(() => {
        console.log("Intial state function called")
        return 0
    });

    console.log("Counter component rendered with count", count)

    const handleClick = () => {
        setCount(count + 1)

    }

    return <button onClick={handleClick}>Count : {count}</button>
}