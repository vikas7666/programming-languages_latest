function ClickEvent() {
    function abc() {
        alert('hello')
    }
    const hello = () => {
        alert('hello')
    }

    return (
        <>
            <h3>1 : Click Event</h3>
            <button onClick={abc}>abc</button>
            <button onClick={hello}>hello</button>
            <button onClick={abc}>abc 1</button>
            <hr />
        </>

    )
}

export default ClickEvent
