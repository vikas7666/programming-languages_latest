import { useState } from "react"
function State() {
    const [fruit, setFruit] = useState('Apple')

    function changeFruits() {
        setFruit('Banana')
    }
    return (
        <>
            <h3>2 : State</h3>
            <p>{fruit}</p>
            <button onClick={changeFruits}>Change Fruits</button>
            <hr />
        </>
    )
}

export default State