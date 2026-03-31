import { useState } from "react";

const ClockProps = ({ color }) => {
    // console.log('color', color)
    // const now = new Date();
    // const hour = now.getHours();
    // const minute = now.getMinutes();
    // const second = now.getSeconds();
    // const clock = `${hour}:${minute}:${second}`

    // simple way 

    const [time,setClockTime] = useState()

    setInterval(() => {
        setClockTime(new Date().toLocaleTimeString())
    }, 1000);
    return (
        <div  style={{ color:color, backgroundColor: '#000', padding: '10px', borderRadius: '10px', fontSize: '50px'}}>
            {time}
        </div>
    )
}

export default ClockProps
