import React from 'react'
import '../Details.css'
const Details = (props) => {
    const {tab}=props
  return (
   
    <div>
        <table >
            <thead>
                <tr>
                    <th>Departure</th>
                    <th>Duration</th>
                    <th>Arrival</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
       {tab.map((x,index)=>
       {return(
        
         <tr key={index}>
                    <td>{x.departure}</td>
                    <td>{x.duration}</td>
                    <td>{x.arrival}</td>
                    <td>{x.price}</td>
                </tr>
    
       )})}
            </tbody>
        </table>

    </div>
  )
}

export default Details