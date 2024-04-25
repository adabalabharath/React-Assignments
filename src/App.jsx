import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { AuthContext } from './components/AuthContexProvider'
import DashBoard from './components/DashBoard'

function App() {
  const [count, setCount] = useState(0)
  const {data}=useContext(AuthContext)

  return (
    <>
   
   {data.token?<DashBoard/>:<Home/>}
    </>
  )
}

export default App
