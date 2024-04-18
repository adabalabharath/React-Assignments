import React, { useEffect, useState } from 'react'
import '../SuperHero.css';
import All from './All';
import { method } from 'lodash';
import MostPowerful from './MostPowerful';


const SuperHero = ({more1,pow}) => {

const [name,setName]=useState("")
const [height,setHeight]=useState(0)
const [weight,setWeight]=useState(0)
const [power,setPower]=useState(0)
const [entry,setEntry]=useState(false)
const [ful,setFul]=useState(null) 
const [renderAll,setRenderAll]=useState(false)
const [renderPo,setRenderPo]=useState(false)
const [showAll,setShowAll]=useState([])


useEffect(()=>{
   valid()
   more1()
},[name,height,weight,power])

const valid=()=>{
    if(name && height && weight && power ){
        setEntry(true)
       
    }else if(!(name && height && weight && power)){
        setEntry(false)
     
    }
   }

const handlePower=(e)=>{
        setPower(e.target.value)
   if(e.target.value>0 && e.target.value<=10){
         document.getElementById('error').innerText=""
         setEntry(true)
   }else if(e.target.value==""){
    setEntry(false)
    document.getElementById('error').innerText=""
   }else{
    document.getElementById('error').innerText="should be between 1 to 10"
   }
}

const add=()=>{
   const newItem ={
      name:name,
      height:height,
      weight:weight,
      power:power
   }
   let send=fetch('http://localhost:3000/superheroes',
    {method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newItem)})
   
  //  send.then(()=>{setHeight("")
  //  setName("")
  //  setWeight("")
  //  setPower("")})
  
}

const show=async()=>{
   
   try{
   let response=await fetch("http://localhost:3000/superheroes")
   let obj=await response.json()
   setShowAll(obj)
   setRenderAll(true)
   setRenderPo(false)
   }catch(error){
       console.log(error)
   }
}

const powerful=async()=>{
   try{
   let response=await fetch("http://localhost:3000/superheroes")
   let obj=await response.json()
    let a=Object.values(obj).sort((x,y)=>y.power-x.power)
   setFul(a[0])
   setRenderPo(true)
   setRenderAll(false)
   }catch(error){
       console.log(error)
       
   }
}

const remove=async(id)=>{
  fetch(`http://localhost:3000/superheroes/${id}`,{
    method:'DELETE'
  })
  const updatedHeroes = showAll.filter((hero) => hero.id !== id);
  setShowAll(updatedHeroes)
  
}


// const modify=async(id)=>{
//    let get=await  fetch(`http://localhost:3000/superheroes/${id}`)
//    let obj=await get.json();
//    setName(obj.name)
//    setHeight(obj.height)
//    setWeight(obj.weight)
//    setPower(obj.power)
// }
  return (
    <div className='super'>
        <div className='inputs'>
        <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='number' placeholder='Enter Height in cms'  onChange={(e)=>setHeight(e.target.value)}/>
        <input type='number' placeholder='Enter Weight in kgs' onChange={(e)=>setWeight(e.target.value)}/>
        <input type='number' placeholder='Enter Power'  onChange={handlePower}/>
        <p id='error' style={{color:'red'}}></p>
      </div>
      
        <button disabled={!entry} onClick={add}>Add Super Hero</button>
        {entry && pow && <button onClick={powerful}>Most Powerful</button> }
        {entry && <button onClick={show}>showAll</button>}        
       
       {showAll && renderAll && <All data={showAll}  dlt={remove} />}
       {ful && renderPo && <MostPowerful full={ful}/>}         
    
        
       
    </div>
  )
}

export default SuperHero