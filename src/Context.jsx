import React, { createContext, useState } from 'react'

export const AuthContext=createContext()
const Context = ({children}) => {
    const [auth,setAuth]=useState(false)
  return (
    <AuthContext.Provider value={{auth,setAuth}}>{children}</AuthContext.Provider>
  )
}

export default Context