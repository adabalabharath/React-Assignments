import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.nav}>
        <h3 style={{textAlign:"center"}} >Bike Rentals Admin DashBoard</h3>
        <div className={styles.link}>
        <Link to='/' style={{color:"white"}}>Bike Rental</Link>
        <Link to='/bookings' style={{color:"white"}}>All Bookings</Link>
        </div>
        <hr/>
    </div>
  )
}

export default Navbar