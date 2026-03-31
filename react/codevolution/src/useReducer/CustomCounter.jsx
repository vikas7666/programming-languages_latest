import { useReducer } from "react";

const useStateCustom = (intialValue) => {
    const reducer = (state, action) => {
        if (typeof action === "function") {
            return action(state)
        }
        return action
    }
    const [state, dispatch] = useReducer(reducer, intialValue)

    const setState = (newValue) => {
        dispatch(newValue)
    }
    return [state, setState]
}
export const CustomCounter = () => {

    const [count, setCount] = useStateCustom(0)

    return <div>
        <p>count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((prev) => (prev + 1))}>Increment with function</button>
    </div>
}