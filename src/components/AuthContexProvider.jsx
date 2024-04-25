import React, { createContext, useState } from 'react'

export const AuthContext=createContext();

const AuthContexProvider = ({children}) => {
    const [data,setData]=useState({isAuth: false,
loading: false,
error: null,
token: ""})
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
  return (
    <AuthContext.Provider value={{data,setData,email,setEmail,password,setPassword}}>
       {children}
    </AuthContext.Provider>
    
  )
}

export default AuthContexProvider;