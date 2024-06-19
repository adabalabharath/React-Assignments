import React from 'react'
import { useSelector } from 'react-redux'

const Restaurant = () => {

 const data=useSelector(state=>state.data)


   
  return (
    <div >
      <h3>{data.length}</h3>
     {data.map(x=>{
        return(<div style={{display:'flex',border:'1px solid black',justifyContent:'space-between',alignItems:'center',height:'150px',margin:'20px'}}>
        <img src={x.image} style={{height:'100%',width:'80px'}}/>
        <div>
        <h3>{x.restaurantName}</h3>
        <p>categories:{x.categories.map(x=>x).join(',')}</p>
        <p>cost for two :{x.cost_for_two}</p>
        
        <p>Accepts:{Object.keys(x.payment).filter(y=>(x.payment[y])? y :'').join(',')}</p>
        </div>
        <p>Rating:{x.rating}</p>
        </div>)
     })}
    </div>
  )
}

export default Restaurant