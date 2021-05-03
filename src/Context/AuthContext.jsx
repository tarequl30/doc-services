import React, { useContext, useEffect, useState } from "react"
import {
    auth,
    googleAuthProvider,
} from "../components/Home/Login/firebase.config"

const AuthContext = React.createContext()
export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setisLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setisLoading(false)
        })
        return unsubscribe
    }, [])

    const signupWithGoogle = () => {
        return auth.signInWithPopup(googleAuthProvider)
    }
    const signOut = () => {
        return auth.signOut()
    }
    const value = {
        currentUser,
        signupWithGoogle,
        signOut,
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
