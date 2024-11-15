import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

//ceate conext 
const AuthContext = createContext();

//AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
            setIsSignedIn(true);
        }
    }, []);

    const signIn = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/login', { email, password });
            const { token } = response.data;
            setToken(token);
            setIsSignedIn(true);
            localStorage.setItem('token', token);
        } catch (err) {
            console.error('Login Failed', err);
        }
        
    }; //function to sign in

    const signOut = () => {
        setToken(null);
        setIsSignedIn(false);
        localStorage.removeItem('token');
    }; //function to sign out

    return (
        <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);