import React, {useState,useEffect} from 'react'
import {useContext} from 'react'


const AuthContext = React.createContext();

export function AuthProvider ({children}) {
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setisLoggedIn
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export function useAuth() {
    return useContext(AuthContext)
}