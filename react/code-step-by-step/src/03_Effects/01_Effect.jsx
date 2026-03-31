/* 
    Key Note if we pass blank array mean only once called when state change or page reload

    useEffect(()=>{
         callOnce()    
    }, []) //  function will called only once due to blank array 


    if we have 2 state and want to called function only when specific state change at time we need to use 

   useEffect(() => {
        // callOnce()
        counterFunction()
    }, [count]) // now function will only called when specific state change 

    // called multiple state

    useEffect(() => {
        // callOnce()
        counterFunction()
    }, [count1], [count2])

    useEffect(() => {
        // callOnce()
        counterFunction()
    }, [props1], [props2])

*/

import { useEffect, useState } from "react"

function Effects() {
    const [count, setCounter] = useState(0);
    const [data, setData] = useState(0);

    /*  useEffect take function as parameter and want to called only once then use as [] array */

    // useEffect(() => {
    //     callOnce()
    // }, [])  // blank array ka means bas ek baar hi ese chalanaa

    // Now when i click data button counterfunction will not called bcz we pass count state in array  

    useEffect(() => {
        // callOnce()
        counterFunction()
    }, [count])

    function callOnce() {
        console.log('callOnce called')
    }
    // if we not declared below funtion in then it will call everytime when page get reload or data change 
    function counterFunction() {
        console.log("counterFunction called");
    }
    return (
        <>
            <p>Use Effect hook</p>
            <button onClick={(() => setCounter(count + 1))}>Counter {count}</button>
            <button onClick={(() => setData(data + 1))}>data {data}</button>
        </>

    )
}
export default Effects