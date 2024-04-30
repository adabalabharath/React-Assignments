import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import '../BikeDetails.css'
const BikeDetails = () => {
 const params=useParams()
 const[bikes,setBikes]=useState({})
 const [isLoading, setLoading] = useState(false);
 const nav=useNavigate()
 const [booking,setBooking]=useState({
  name : '',
  phone:'',
  pickup:'',
  dropOff:'',
  completed:false,
  bikeId: params.id,
  totalAmount:''
 })

  useEffect(()=>{
    get()
    
  },[params.id])

const handleInputChange = (e) => {
  const { name, value } = e.target;
  
    setBooking(prev => ({ ...prev, [name]: value }));
  
};

  const get=async()=>{
   try {
      setLoading(true)
      let response = await axios.get(`http://localhost:8080/bike/${params.id}`);
      setBikes(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  if(isLoading){
    return <Loading/>
  }

  const hurdle=()=>{
     const pickup = new Date(booking.pickup); // Reinitialize pickup and dropOff here
    const dropOff = new Date(booking.dropOff);
    const time = dropOff.getTime() - pickup.getTime();
     if (time < 0) {
    alert("Pickup is later");
    return false
   
  } else if (pickup.getTime() === dropOff.getTime()) { // Compare timestamps
    alert("Pickup and Dropoff are same");
    return false
    
  } 
  return true
  }

const handleSubmit = async(e) => {
    e.preventDefault();
    const pickup = new Date(booking.pickup); // Reinitialize pickup and dropOff here
    const dropOff = new Date(booking.dropOff);
    const time = dropOff.getTime() - pickup.getTime();
    const price =  Math.ceil(time / (1000 * 60 * 60)) * bikes.hourlyRate;
   
  const newBooking = {
      ...booking,
      totalAmount:price
    };
    if(hurdle){
    try {
      // Send POST request to create booking
      const response = await axios.post('http://localhost:8080/bookings', newBooking);
      console.log('Booking created:', response.data);
      
      // Redirect to Bookings page upon successful booking creation
      nav('/bookings');
    } catch (error) {
      console.error('Error creating booking:', error);
      // Handle error if necessary
    }
    }
    
  }

  return (
    <div className='comp'>
      <div className='container'>
      <div className='card'>
        <img src={bikes.imageUrl} style={{ width: "200px"}} />
        <div className='nam'>
          <h2 data-testid="bike_name" className='bike'>{bikes.bikeName}</h2>
          <h2 data-testid="bike_hourly-rate" className='rate'>{bikes.hourlyRate}Rs/hr</h2>
        </div>
        <h3 data-testid="bike_available" className='available'>Bikes available :{bikes.available}</h3>
       
      </div>
      <form className='details' onSubmit={handleSubmit}>      
        <label>Name</label>
        <input type="text" placeholder='name' name="name" onChange={handleInputChange}  value={booking.name}/>
        <label>Phone</label>
        <input type="number" placeholder='phone' name="phone" onChange={handleInputChange} value={booking.phone}/>
        <label>Pick-up time</label>
        <input type="datetime-local" name="pickup" onChange={handleInputChange} value={booking.pickup}/>
        <label>Drop-off time</label>
        <input type="datetime-local" name="dropOff" onChange={handleInputChange} value={booking.dropOff}/>
        <button>Book Now</button>      
      </form>
    </div>
  </div>
    
  )
}

export default BikeDetails