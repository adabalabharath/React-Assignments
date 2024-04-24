import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { AuthContext } from './AuthContextProvider'

function App() {
  const [count, setCount] = useState(false)

  const {authentication}=useContext(AuthContext)
  console.log(authentication)

  return (
    <>
      {!authentication.token?<Login/>:""}
     
       {authentication.token?<Dashboard/>:""}
    </>
  )
}

export default App
