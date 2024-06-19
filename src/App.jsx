import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flight from './Flight'
import Dashboard from './Dashboard'
import { NavLink, Route, Routes } from 'react-router-dom'
import User from './User'
import Navbar from './Navbar'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import UseMemo from './UseMemo'
function App() {
  

  return (
    <>
      {/* <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/flight' element={<Flight/>}/>
          <Route path='/user/:id' element={<User/>}/>
         <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
      </Routes> */}

      <UseMemo/>
    </>
  )
}

export default App
