import React, { createContext, useState, useContext} from "react";


const UserProfile = createContext();


export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <UserProfile.Provider value ={{ user, setUser}}>
            {children}
        </UserProfile.Provider> 
    )
}   

export const useUser = () => {
    return useContext(UserProfile);
}; 