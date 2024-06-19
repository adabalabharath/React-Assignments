import React, { useContext } from 'react'
import { AuthContext } from './Context'
import { Navigate, useLocation } from 'react-router-dom'
import Home from './Home'

const PrivateRoute = ({children}) => {


  const {auth}=useContext(AuthContext)

   const loc=useLocation()
   console.log(loc)

  return children

}

export default PrivateRoute