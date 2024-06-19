import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Home from './Home'

const UseMemo = () => {
 const [count,setCount]=useState(0)
const [text,setText]=useState('')
   useEffect(()=>{fact(count)},[count])

const a=useCallback(()=>{
    return 'hi'
},[count])

   console.log('rendering')
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>counter</button>
        {count}
        <input type='text' onChange={(e)=>setText(e.target.value)}/>
        <Home c={count} a={a}/>
    </div>
  )
}
function fact(n){

    let answer=1;
    for(let i=n;i>=1;i--){
        answer=answer*i
    }
    console.log('factorial running',answer)
    return answer
}


export default UseMemo