import React from 'react'

const AuthContext = React.createContext({
    email: '',
    loggedIn: false,
    logIn: (email) => {},
    logOut: () => {}
})

export default AuthContext;