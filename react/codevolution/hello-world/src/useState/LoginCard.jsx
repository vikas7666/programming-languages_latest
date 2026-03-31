import { useState } from "react";

export const LoginCard = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [message, setMessage] = useState("")

    const handleLogin = () => {
        setIsLogin(!isLogin)
    }
    const handleChange = (event) => {
        setMessage(event.target.value)
    }
    return (
        <>
            <button onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</button>
            <div>
                <input type="text" placeholder="type a message" value={message} onChange={handleChange} />
            </div>
            <p>{message}</p>
        </>
    )
}