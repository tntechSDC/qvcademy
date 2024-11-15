import React, { createContext, useState, useContext } from 'react';

//ceate conext 
const AuthContext = createContext();

//AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const signIn = () => setIsSignedIn(true); //function to sign in
    const signOut = () => setIsSignedIn(false); //function to sign out

    return (
        <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);