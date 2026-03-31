import { useState } from "react"

export const SimpleCounter = () => {
    const [count, setCount] = useState(0)
    console.log('Render Phase Component rendering with count', count)

    const handleClick = () => {
        console.log('simple set count is', count)
        setCount(count + 1)
        console.log('Still in trigger phase After set Count is:', count)
        setCount(count + 5)
        console.log(' After set Count is:', count)
        setCount(count + 10)
        console.log(' After set Count is:', count)

        setTimeout(() => {
            console.log('After 2 second:', count)
        })
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}