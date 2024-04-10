   import React, { useEffect, useState } from 'react'
   import App from '../App';
   import './UserDetails.css'

   const UserDetails = ({id,val}) => {

      const[fil,setFil]=useState([])


      const get=async(id)=>{
         const response = await fetch('users.json');
               const users = await response.json();
               const filteredUsers = users.filter(user =>{
                  return  user.zipcode===id;
      });
               setFil(filteredUsers);
         
      }
      get(id)
   return (
   <div className='block'>
      <h3>searched for : {val}</h3>
      <div className="user_info" > 
         {fil.map((e)=>{
            return(<div key={e.zipcode}>
            <h2>Name :{e.name}</h2>
            <p>username :{e.username}</p>
            <p>Email :{e.email}</p>
            <p>Address :{e.city} {e.street} {e.zipcode}</p>
            <p>Company name :{e.company}</p>
            <p>website:{e.website}</p>
            </div>)
         })}        
                  
      </div>
      </div>
   )
   }

   export default UserDetails;