import { useState } from "react"

function Toggle() {
    const [display, setDisplay] = useState(true)
    const [count, setCount] = useState(1)
    return (
        <>
            <h3> 3 : Toggle</h3>
            {/* if ! not means if it true then make false and if false then make true */}
            <button onClick={() => setDisplay(!display)}>Display Button</button>
            <button onClick={() => setCount(count + 1)}>counter</button>
            {display ? <p>Vikas</p> : null}

            {
                count === 0 ? <h4>Condition 0</h4>
                    : count === 1 ? <h4>Condition 1</h4>
                        : count === 2 ? <h4>Condition 2</h4>
                            : count === 3 ? <h4>Condition 3</h4>
                                : count === 4 ? <h4>Condition 4</h4>
                                    : <h4>Other Condition</h4>

            }
            <hr />
        </>
    )
}

export default Toggle