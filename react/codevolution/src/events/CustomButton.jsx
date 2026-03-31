export const CustomButton = ({ text }) => {
    const name = "code Evolution"
    const handleClick = () => {
        // console.log(e.target)
        // console.log("click cordinate", e.clientX, e.clientY)
        // console.log("which mouse button", e.button)
        console.log(`hey ${name} you clicked ${text}`)
    }
    /*   // if we write handleClick() then function will execute immediately
        return <button onClick={handleClick}>Like</button> */


    // using inline
    // return <button onClick={() => alert("Thanks for Liking")}> Like</button>

    return <button onClick={handleClick}> {text}</button >
}