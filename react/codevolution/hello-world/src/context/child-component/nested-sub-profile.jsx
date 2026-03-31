import { useContext } from "react"
import { UserContext } from "../UserContext";

// export const NestedSubProfile = ({ useranme, children }) => {

//     return (
//         <div>
//             <h2>NestedSubProfile Compoent loaded {children}</h2>
//             <p>Here Name we pass as props :{useranme}</p>
//         </div>
//     )
// }

// using useContext rather than props drilling 
export const NestedSubProfile = () => {
    const user = useContext(UserContext);
    // console.log('user', user)
    return (
        <div>
            <h2>NestedSubProfile Compoent loaded</h2>
            <p>Here Name we pass as props :{user.name}</p>
        </div>
    )
}