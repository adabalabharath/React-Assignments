import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import'../Login.css';
import {AuthContext} from '../AuthContextProvider'

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

 const {authentication,setAuthentication}=useContext(AuthContext)




  const sub=async(email,password)=>{
    let resp=await axios.post("https://reqres.in/api/login",{email,password})
    let obj=await resp.data
    console.log(obj)
    if(obj.token){
       setAuthentication({isAuth: true,
        loading: false,
        error: null,
        token: obj.token})
    }

  }


  const emailHandle=(ev)=>{
       setEmail( ev.target.value)
  }
  const passHandle=(ev)=>{
    setPassword( ev.target.value)
}

 
  return (
    <div>
     
      <input type='email' placeholder='enter email' onChange={emailHandle}/>
      <input type='password' placeholder='enter password' onChange={passHandle}/>
      <button onClick={()=>sub(email,password)}>submit</button>
   
    </div>
  )
}

export default Login
