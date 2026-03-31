// modular css can we used in specific one or two component not for every component
import style from '../css/004_Card.module.css';

export default function CSSModuleCSS() {
    return (
        <div className={style.cardStyle}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
            <div>
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}