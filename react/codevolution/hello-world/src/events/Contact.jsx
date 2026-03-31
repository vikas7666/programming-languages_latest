import { ActionButton } from "./ActionButton";

export const Contact = () => {
    const handleSendMessage = () => {
        alert('sending your message')
    }
    return (
        <div>
            <h2>Contact Us</h2>
            <ActionButton text="Send Message" onClick={handleSendMessage} />
        </div>
    )
}