import React, { useEffect, useState } from 'react'
import Details from './Details'
import '../Searching.css'
const Searching = () => {

let [data,setData]=useState([])
let [source,setSource]=useState("")
let [destination,setDestination]=useState("")
let[table,setTable]=useState([])
useEffect(()=>{
  const getdata=async()=>{
  try{
     let response= await fetch('https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1');
     let obj= await response.json();
     setData(obj)
  }
  catch(err){
          console.log(err)
  }}
  getdata();
  document.getElementById('p').innerText="No flights found"
},[])


const search=async()=>{
  
  const results = data.filter(x => x.source === source && x.destination === destination);
        if (results.length > 0) {
            setTable(results);
            document.getElementById('p').innerText="";  // Clear any previous message
        } else {
            setTable([]);  // Clear previous results
            document.getElementById('p').innerText="No Flights Found";
            setSource('')
            setDestination('')
        }

}



  return (
    <div>
      <div className='form'>
       <input type='text' placeholder='source' onChange={(e)=>setSource(e.target.value)} value={source}/>
       
       <input type='text' placeholder='Destination' onChange={(e)=>setDestination(e.target.value)} value={destination} />
      
       <button onClick={search}>Search</button>
       <p id='p'></p>
       </div>
       {table.length>0 && <Details tab={table}/>}
    </div>
  )
}

export default Searching