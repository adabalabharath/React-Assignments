import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Flight = () => {
    const [source,setSource]=useState('')
    const [destination,setDestination]=useState('')
    const [flight,setFlight]=useState([])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        let res=await axios.get('https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1');
        console.log(res.data)
        let filtered=res.data.filter(x=>(x.source.toLowerCase()===source && x.destination.toLowerCase()===destination))
        console.log(filtered)
        setFlight(filtered)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='source' onChange={(e)=>setSource(e.target.value)}/>
        <input type='text' placeholder='destination' onChange={(e)=>setDestination(e.target.value)}/>
        <button >Search</button>
        </form>
    </div>
  )
}

export default Flight