import { useState } from "react"

export const PreviousStateCounter = () => {
    const [count, setCount] = useState(0)
    console.log('Render Phase Component rendering with count', count)

    const handleClick = () => {
        setCount((prev) => {
            console.log("first updated fn: prev count =", prev)
            return prev + 1
        })
        console.log('Still in trigger phase After set Count is:', count)

        setCount((prev) => {
            console.log("second updated fn: prev count =", prev)
            return prev + 5;
        })

        setCount((prev) => {
            console.log("Third updated fn: prev count =", prev)
            return prev + 10;
        })
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}