import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './comps/Login'
import Dashboard from './comps/Dashboard'
import { Auth } from './comps/ContextProvider'

function App() {
  const [count, setCount] = useState(0)
  const {initial}=useContext(Auth)
 
  return (
    <>
      {initial.token ?  <Dashboard/>:<Login/>}
    </>
  )
}

export default App
