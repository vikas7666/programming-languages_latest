import { useState } from "react"

export const BatchingCounter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState(false);

    console.log('Render Phase Component rendering')

    const handleClick = () => {
        setCount((prev) => {
            return prev + 1
        })

        setCount((prev) => {
            return prev + 5;
        })

        setCount((prev) => {
            return prev + 10;
        })

        setName("Updated")
        setIsActive(true)
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <p>Name : {name}</p>
            <p>Active : {isActive ? 'yes' : 'No'}</p>
            <button onClick={handleClick}>Update All three</button>
        </div>
    )
}