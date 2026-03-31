export const Greeting = ({ name = "Guest", message = "Hello" }) => {
    /* after destructuring here we are passing an default paramter */
    return (
        <h2>{message}, {name}</h2>
    )
} 