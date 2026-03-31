import { UserContextProvider } from './UserContextProvider';
import { Avtar } from './avtar';


export const ContextStateWithRoot = () => {
    return (
        <UserContextProvider>
            <div>
                <p>Hello</p>
                <Avtar></Avtar>
            </div>
        </UserContextProvider>
    )
}