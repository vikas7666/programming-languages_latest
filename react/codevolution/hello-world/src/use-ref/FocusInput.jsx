import { useRef } from "react"

export const FocusInput = () => {

    let inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter a text" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    )
}