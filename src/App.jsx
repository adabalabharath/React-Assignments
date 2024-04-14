import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searching from './Components/Searching';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Flight Search</h2>
      <Searching/>
     
    </>
  )
}

export default App
