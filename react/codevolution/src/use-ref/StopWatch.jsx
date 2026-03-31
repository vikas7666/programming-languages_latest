import { useState, useRef } from "react"

export const StopWatch = () => {
    const [time, setStart] = useState(0);  // useState
    const intervalRef = useRef(null);      // interval

    const start = (() => {
        intervalRef.current = setInterval(() => {
            setStart((prev) => prev + 1)
        }, 1000)
    })

    const stop = (() => {
        clearInterval(intervalRef.current)
    })

    return (
        <div>
            <p>{time}</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}