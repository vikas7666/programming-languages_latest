import styles from "../Alert.module.css";

export const Alert = ({ children, type = "success" }) => {
    return (
        <div>
            <button class="error">New Button</button>
            <div className={`${styles.alert} ${styles[type]}`}
            // style={{
            //     backgroundColor: type === "success" ? "red" : '',
            //     color: "black",
            //     padding: "16px",
            //     marginBottom: "16px"
            // }} 
            >{children}</div>

        </div>
    )
}
// Inline styling we used as object

/*
 { }  // outer one bcz we are writing jsx
{{}}  // inner one bcz we are wring actual javascript object
// 
*/