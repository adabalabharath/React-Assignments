import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoCorrect from './Comps/AutoCorrect'

function App() {
  const [count, setCount] = useState(0)

let corrections = {
"taech": "teach",
"wierd": "weird",
"chnage": "change",
"claen": "clean",
"realy": "really",
"inda":"india"
}


  return (
    <>
      <h1>React Auto Correction App</h1>
      <AutoCorrect  correction={corrections}/>
    </>
  )
}

export default App
