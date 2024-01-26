import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const updateUser = (newUser) => {
        
        if (newUser) {
            console.log("user struct...")
            console.log(newUser.user)
            setUser(newUser.user);
        } else {
            setUser(null)
        }
        
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};