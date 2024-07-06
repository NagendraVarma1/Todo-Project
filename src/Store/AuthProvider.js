import { useState } from "react"
import AuthContext from "./auth-context"

const AuthProvider = (props) => {
    const initialState = localStorage.getItem('email')
    const [email, setEmail] = useState(initialState)

    let userLoggedIn = !!email;

    const loginHandler = (email) => {
        setEmail(email)
        localStorage.setItem('email', email)
    }

    const logoutHandler = () => {
        setEmail(null)
        localStorage.removeItem('email')
    }

    const authContext = {
        email: email,
        loggedIn: userLoggedIn,
        logIn: loginHandler,
        logOut: logoutHandler,
    }
    return <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
}

export default AuthProvider;