import { Profile } from './child-component/profile';
import { UserContext } from './UserContext';
/* 
 To Overcome prop drilling we have used UserContext 
*/
export const ContextRoot = () => {
    const user = {
        name: 'Ved here or Om here',
        surname: 'shukla',
        age: 31,
    }
    return (
        <UserContext value={user}>
            <div>
                <Profile user={user}>profile</Profile>
            </div>
        </UserContext>

    )
}