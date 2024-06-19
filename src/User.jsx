import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
      async function fetch(){
        let res=await axios.get(`http://localhost:3000/data/${params.id}`)
        console.log(res.data)
         setData(res.data)
      }
      fetch()
    })
  return (
    <div>
      {data.name}
    </div>
  )
}

export default User