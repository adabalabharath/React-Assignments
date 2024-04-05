import React, { useState } from 'react'
import '../User.css';
const UserDetails = (props) => {


  return (
    <div className='container'>
        
       {props.users.map((e)=>{
       return ( 
        <div key={e.id} className='block'>
          <img src={e.avatar} style={{ width: '70px', borderRadius: "50px" }} />
          <div>
            <span style={{ fontWeight: 'bold' }}>{e.first_name}</span>&nbsp;
            <span style={{ fontWeight: 'bold' }}>{e.last_name}</span>
            <p>{e.address}</p>
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>{e.karma}</span>&nbsp;
            <p>Karma</p>
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>{e.followers}</span>&nbsp;
            <p>Followers</p>
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>{e.posts}</span>&nbsp;
            <p>Posts</p>
          </div>
          <button id='button'>
            {e.is_following ? "unfollow" : "follow"}
          </button>
        </div>

     );})}
    </div>
  )
}


export default UserDetails;