import { ActionButton } from "./ActionButton"

export const NewsLetter = () => {
    const handleSubcribe = () => {
        alert("Thanks for subcribing")
    }
    return (
        <div>
            <h2>Subcribe to News Lettter</h2>
            <ActionButton onClick={handleSubcribe} text="Subcribe" />
        </div>
    )
}