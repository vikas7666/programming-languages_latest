import { useReducer } from "react";

const intialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 1: "increment"
            return state + 1;
        case 2: "decrement"
            return state + 1;
        case 3: "reset"
            return state + 1;
        default:
            return state
    }
}

export const CounterWithReducer = () => {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => dispatch("increment")}>Incement</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("decrement")}>Reset</button>
        </div>
    )
}