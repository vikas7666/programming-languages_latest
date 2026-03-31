export default function Cards({cardStyle,textColor}) {
    return (
        <div style={cardStyle}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
            <div>
                <h4 style={{ color: textColor }}><b>John Doe</b></h4>
                <p style={{ color: textColor }}>Architect & Engineer</p>
            </div>
        </div>
    )
}