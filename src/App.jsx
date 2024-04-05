import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './comps/Counter'

function App() {
  const [count, setCount] = useState(0)

  

  const incHandle=()=>{
    setCount(count+1);
  }

  const decHandle=()=>{
    setCount(count-1);
  }

  const double=()=>{
    setCount(count*2);
  }

  return (
    <>
      <Counter count={count}   incHandle={incHandle} decHandle={decHandle} double={double}/>
    </>
  )
}

export default App
