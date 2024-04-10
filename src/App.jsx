  import { useState } from 'react'

  import './App.css'
  import Home from './Pages/Home'
  import UserDetails from './Comps/UserDetails'

  function App() {
  
    const[status,setStatus]=useState(false)
    const[userId,setUserId]=useState("");
    const[text,setText]=useState("")

  const setting=(t)=>{
      setText(t);
  }
    const stats=(id)=>{
      setStatus(true)
      setUserId(id)
    }
      console.log(userId)
    return (
      <div>
        <h1>React Search Engine App</h1>
        {!status ? <Home  click={stats}   set={setting}/> :<UserDetails id={userId}  val={text}/>}


        
      </div>
    );
  }

  export default App
