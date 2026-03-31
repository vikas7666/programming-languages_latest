import { useState } from 'react';
import ClockProps from './02_ClockProps';

export default function ClockComponent() {
    const [color, setColor] = useState("blue")
    return (
        <>
            <h3>Default Props in React JS</h3>

            <select style={{ marginBottom: '15px' }} onChange={(event) => setColor(event.target.value)}>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
            </select>

            <ClockProps color={color} />
        </>
    )
}