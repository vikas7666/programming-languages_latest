
<!-- // imported context  -->
import { createContext } from "react";

<!-- // created and export into a variable -->
export const UserContext = createContext();

<!-- user object -->
   const user = {
        name: 'Ved here or Om here',
        surname: 'shukla',
        age: 31,
    }

<!-- Now wrap entire UseContext so that any child any use it. -->

 <UserContext value={user}>
    <div>
        <Profile user={user}>profile</Profile>
    </div>
</UserContext>

<!-- // imported context  --> 
import { useContext } from "react"
import { UserContext } from "../UserContext";

<!-- Now Wrap into a vraible  -->
const user = useContext(UserContext);
console.log('user', user) // user {name: 'Ved here or Om here', surname: 'shukla', age: 31}