import { useEffect } from 'react';

function Counter({ count, data }) {
    const handleCounter = () => {
        console.log("handle Counter  called ")
    }
    const handleData = () => {
        console.log("Data Counter called ")
    }

    useEffect(() => {
        handleCounter()
        console.log("mounting phase only")
    }, []) // called handleCounter only one times that's why we have given blank array

    useEffect(() => {
        handleData()
        console.log("update phase only")
    }, [data])

    useEffect(() => {
        return () => {
            console.log("Unmount Phase Only")
        }
    }, [])

    return (
        <div>
            <h4>Counter Value<span style={{ paddingLeft: "15px" }}>{count}</span></h4>
            <h4>Data   Value <span style={{ paddingLeft: "15px" }}>{data}</span></h4>
        </div>
    )
}

export default Counter