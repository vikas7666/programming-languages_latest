export const EventHanding = () =>{

    // function handleButtonClick(){
    //     alert('Hey I am click event')
    // }

    const handleButtonClick = (event) =>{
        console.log(event)
        console.log(event.target)
        alert('Hey I am click event')
    }
    // Parameter
    const handleWelcomeUser = (user) =>{
        console.log(`Hey ${user} Welcome`)
    }
    return (
        <>
        {/* function component with Named function  */}
        <button onClick={handleButtonClick}>Click ME</button>

        {/* Fat Arrow function  */}
        <button onClick={(event) => handleButtonClick(event)}>Click ME 2</button>

        {/* Inline Event Handler  */}
        <button onClick={(event) => console.log(event)}>Inline Function</button>

        {/* Function Component with Inline Arrow Function  */}
        <button onClick={() => alert('Hey I am inlin evenet')}>Inline Arrow Function</button>

        {/* Passing Arguments to Event Handler */}

        {/* <button onClick={handleWelcomeUser('vikas')}>Click ME</button> */}

        {/* Function call karate samay jo bhi value kuch bhi pass kar rahe ho  argument and jab function define and declare kar rahe hai use parameter*/}
        {/* argument */}
        <button onClick={() => handleWelcomeUser('vikas')}>Click ME</button>
        </>
    )
}