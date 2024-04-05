import React from 'react'
import '/src/Counter.css'
const Counter = (props) => {
    const {count,incHandle,decHandle,double}=props
  return (
   <div data-testid="counter-header">
    <h2>Counter</h2>
    <h3 data-testid="count">{count}</h3>
    <button onClick={incHandle}>increment</button>
    <button onClick={decHandle}>decrement</button>
    <button onClick={double}>Double</button>
   </div>

  )
}

export default Counter