import React from 'react'
import style from '../All.module.css';
const All = (props) => {

  const {data,dlt,modify}=props
  
  const del=(id)=>{
     dlt(id)  
  }
  
  
  return (
    <div className={style.all} >
      {data.map((e)=>{
        return(
          <div className={style.single}  key={e.id}>
          <h2>Hero Name : {e.name}</h2>
          <p>Height : {e.height}cms</p>
          <p>weight : {e.weight}kgs</p>
          <p>power : {e.power}</p>
           <button onClick={()=>del(e.id)}>delete</button>
           {/* <button onClick={()=>modify(e.id)}>update</button>  */}
          </div>
        )
      })}
    </div>
  )
}

export default All