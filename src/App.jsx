import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SuperHero from './components/SuperHero'
import All from './components/All'
import MostPowerful from './components/MostPowerful'

function App() {


const [pow,setPow]=useState(false)

const most=async()=>{
  try{
   let response=await fetch("http://localhost:3000/superheroes")
   let obj=await response.json()
   obj.length>1? setPow(true) :setPow(false)
   }catch(error){
       console.log(error)
   }
}



  return (
    <>
      <SuperHero   more1={most}   pow={pow}  />
      
    </>
  )
}

export default App
