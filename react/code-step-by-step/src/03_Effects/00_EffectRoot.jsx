import { useState } from 'react';
import Effects from './01_Effect';
import Counter from './02_Counter';

function EffectRoot() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    const [display, setDisplay] = useState(true)
    return (
        <div >
            {
                display ? <Counter count={count} data={data} /> : null
            }
            <Counter count={count} data={data} />
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <button onClick={() => setData(data + 1)}>Count {count}</button>
            <button onClick={() => setDisplay(!display)}>Display</button>
        </div>
    )
}

export default EffectRoot