import React, {createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './api'

const AuthContext = createContext(null); 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [authLoading, setAuthLoading] = useState(true); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            setAuthLoading(false);; 
        });

        return () => unsubscribe(); 

    }, []); 

    return (
        <AuthContext.Provider value={{ user, authLoading }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)