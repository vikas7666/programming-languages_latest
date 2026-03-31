import { useState } from 'react';
import { UserContext } from './useContextHook'

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'vikas',
        age: 31,
        theme: 'dark'
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};