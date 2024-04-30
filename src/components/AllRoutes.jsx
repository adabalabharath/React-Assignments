import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import BikeDetails from '../pages/BikeDetails'
import Bookings from '../pages/Bookings'
import Loading from './Loading'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/loading' element={<Loading/>}/>
            <Route path='/bike/:id' element={<BikeDetails/>}/>
            <Route path='/bookings' element={<Bookings/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes