import React from 'react'
import '../showform.css'
const ShowForm = ({form}) => {
   console.log(form.marriageStatus)
  return (
    <div className='showw'>
    <div className='new'>
    <h3 style={{textAlign:'center'}}>form data</h3>
      
          <h3>First Name :{form.firstName}</h3>
          <h3>lastName :{form.lastName}</h3>
          <h3> Email :{form.email}</h3>
          <h3>Password :{form.password}</h3>
          <h3>Phone :{form.phNumber}</h3>
          <h3>country :{form.country}</h3>
          <h3>DOB :{form.birthDate}</h3>
          <h3>Avatar :{form.avatar}</h3>
          <h3>Married :{form.marriageStatus ? "Yes":"No"}</h3>
          <h3>Gender:{form.gender}</h3>
        
    </div>
    </div>
  )
}

export default ShowForm