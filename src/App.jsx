import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import style from './Form.module.css'
import Form from './components/Form'
import ShowForm from './components/ShowForm'

function App() {
 const [sex,setSex]=useState(false)
 

  return (
    <>
    <h1 style={{textAlign:'center'}}>React Form Assignment</h1>
    <Form />
     
    </>
  )
}

export default App
