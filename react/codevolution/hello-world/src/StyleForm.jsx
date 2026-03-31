export const StyleForm = () => {
    return (
        <form className="contact-form">
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" className="htmlm-input" />
            <br />
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname" className="form-input" tabIndex="1" />
        </form >
    )
}

