import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Bookings.css'
const Bookings = () => {

  const [data,setData]=useState([])
  const [total,setTotal]=useState()
  const fetch=async()=>{
    const resp=await axios.get("http://localhost:8080/all")
    console.log(resp.data)
    setData(resp.data)
  }

useEffect(()=>{
  fetch()
  const sum = data.map((x) => x.totalAmount).reduce((x, y) => x + y, 0);
  setTotal(sum);
},[data])

const butt=async(id,bike)=>{
   
   const resp=await axios.patch(`http://localhost:8080/bookings/${id}`)
   console.log(resp.data)
   fetch()
   if(resp){
    await axios.patch(`http://localhost:8080/bikes/${bike}`)
   }
   
}
  return (
<div className='bookings'>
   <h3>total revenue:{total}Rs</h3>
  <div>
    <table className='tab'>
      <thead className='head'>
        <tr>
          <th>Id</th>
          <th>BikeId</th>
          <th>Name</th>
          <th>phone</th>
          <th>Pickup</th>
          <th>DropOff</th>
          <th>Total Amount</th>
          <th>Completed</th>
        </tr>
      </thead>
   <tbody className='body'>
    {data.map((booking) => (
      <tr key={booking.id}>
        <td>{booking.id}</td>
        <td>{booking.bikeId}</td>
        <td>{booking.name}</td>
        <td> {booking.phone}</td>
        <td>{booking.pickup}</td>
        <td> {booking.dropOff}</td>
        <td> {booking.totalAmount}</td>
        <td>{booking.completed ? <button >Yes</button> : <button onClick={()=>butt(booking.id,booking.bikeId)}>No</button>}</td>     
      </tr>
    ))}
      </tbody>
     </table>
  </div>
  </div>
);

}

export default Bookings