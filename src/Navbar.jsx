import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        
        <Link to="/flight" className="nav">flight</Link>
        <Link to="/dashboard" className="nav">users Page</Link>
        <Link to='/'>Home</Link>
        
      </div>
  )
}

export default Navbar