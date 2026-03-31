import { createContext } from "react";

// export const UserContext = createContext();

/* we can pass an default value also such as  */
export const UserContext = createContext({
    name: 'Guest',
    age: '20',
    surname: ''
});