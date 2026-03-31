// import { useContext } from "react";
import { use } from "react";
import { UserContext } from './useContextHook'

export const Avtar = (isLoading = 'false') => {
    if (isLoading) {
        return (
            <p>Loading User Data </p>
        )
    }
    // const { user, setUser } = useContext(UserContext);

    // we can also "use" use in place of "useContext"
    const { user, setUser } = use(UserContext);

    // theme toogle button
    const toggleTheme = () => {
        setUser({
            ...user,
            theme: user.theme === 'dark' ? 'light' : 'dark'
        })
    }
    return (
        <div>
            <p>Username Name is : {user.name}</p>
            <p>Current theme is : {user.theme}</p>
            <button onClick={() => toggleTheme()}>Toogle Theme</button>
        </div>
    )


};