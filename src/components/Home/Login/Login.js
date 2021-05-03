import React from "react"
import { useAuth } from "../../../Context/AuthContext"

const Login = () => {
    const value = useAuth()

    const handleClick = async () => {
        try {
            await value.signupWithGoogle()
        } catch (error) {
            console.log(error)
        }
    }
    const signOut = async () => {
        try {
            await value.signOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="text-center mt-5">
            <p>
                {" "}
                {value.currentUser
                    ? "user logged In"
                    : "user not logged in"}{" "}
            </p>
            <button onClick={handleClick}>LOGIN WITH GOOGLE</button>
            <button onClick={signOut}>Log out</button>
        </div>
    )
}

export default Login
