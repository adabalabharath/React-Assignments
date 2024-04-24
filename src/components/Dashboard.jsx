import React, { useContext } from 'react'
import { AuthContext } from '../AuthContextProvider'

const Dashboard = () => {

    const {authentication,setAuthentication}=useContext(AuthContext)

    const setAuth=()=>{
        setAuthentication({
            isAuth: false,
loading: false,
error: null,
token: ""

        })
    }
  return (
    <div>
      
           <h3>token:{authentication.token}</h3>
           <button onClick={setAuth}>LogOut</button>
      
    </div>
  )
}

export default Dashboard
