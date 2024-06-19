import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Dashboard = () => {
    const [page,setPage]=useState(1)
    const [data,setData]=useState([])
    const [total,setTotal]=useState()
    const [params,setParams]=useSearchParams()
    
    const fetch=async()=>{
        let response = await axios.get(`http://localhost:3000/data?_limit_=10&_page=${page}`)
            setData(response.data.data)
            console.log(response.data)
        let t=await axios.get('http://localhost:3000/data')
       
        setTotal(t.data.length)
        
    }

    useEffect(()=>{
      fetch()
      
    },[page])
   
   const buttons=()=>{
    let but=[]
    for(let i=0;i<total/10;i++){
        but.push(<button onClick={()=>handleClick(i+1)}>{i+1}</button>)
    }
    return but

   }

   const handleClick=(page)=>{
     setPage(page)
     let obj={
        _page:page,
        _limit:10
     }

     setParams(obj)
     
   }

    
  return (
    <>
    <div>
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Image</th>
                <th>salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map(x=>{
                return(<tr key={x.id}>
                    <Link to={`/user/${x.id}`}><td >{x.name}</td></Link>
                    <td>{x.department}</td>
                    <td>{x.image}</td>
                    <td>{x.salary}</td>
                </tr>)
            })}
          </tbody>
        </table>
    </div>
        {buttons()}
        </>
  )
}

export default Dashboard