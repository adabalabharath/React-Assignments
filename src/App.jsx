import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RestaurantDetails from './Components/RestaurantDetails'

function App() {
  const[data,setData]=useState([])


  useEffect(()=>{
  const getData=async()=>{
    let response=await fetch('data.json');
    let obj=await response.json();
    setData(obj);
  }
 
  getData()
  },[])
 console.log(data)
  return (
    <>
     
     <RestaurantDetails restaurant={data}/>
    </>
  )
}

export default App
