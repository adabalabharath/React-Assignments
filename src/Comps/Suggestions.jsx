import React, { useState } from 'react';
import './Suggestions.css'
import UserDetails from './UserDetails';
const Suggestions = ({ names ,data,clickfunc  }) => {
  const[id,setId]=useState("")
    const handleClick = () => {

      if(Object.values(data).includes(names)){
           setId(data["zipcode"])

      }
        clickfunc(data["zipcode"])   ;
       
        
        }
     

    return (
      <>
        <div onClick={handleClick}>
            {names}
        </div>
       
      
</>
    );

}
export default Suggestions;
