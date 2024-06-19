import React, { useContext, useState } from 'react'
import { Auth } from './ContextProvider'
import axios from 'axios'

const Login = () => {

   const {initial,setInitial}=useContext(Auth)

   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
  
    const handleSubmit=(e)=>{
       axios.post('https://reqres.in/api/login',{email,password}).then(x=>setInitial(prev=>({...prev,token:x.data.token,isAuth:true})))

        

    }
  return (
    <div>
        <input type='email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSubmit}>login</button>
        
    </div>
  )
}

export default Login