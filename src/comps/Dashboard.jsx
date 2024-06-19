import React, { useContext } from 'react'
import { Auth } from './ContextProvider'

const Dashboard = () => {
    const {initial,setInitial}=useContext(Auth)

    

    const handleClick=()=>{
        setInitial(prev=>({...prev,token:'',isAuth:false}))
    }
    console.log(initial)
  return (
    <div>
    <h2>{initial.token}</h2>
    <button onClick={handleClick}>logout</button>
    </div>
  )
}

export default Dashboard