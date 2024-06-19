import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Four, One, Three ,Two} from "../redux/actionType";
import { getRest } from "../redux/action";

const Buttons = () => {
    const data=useSelector(state=>state.data)
    const dispatch=useDispatch()


    const rating4=()=>{
        return {rating:4,name:Four}
    }
    const rating3=()=>{
        return {rating:3,name:Three}
    }
    const rating2=()=>{
         return {rating:2,name:Two}
    }
    const rating1=()=>{
         return {rating:1,name:One}
    }
    const retrieve=async(num)=>{
        console.log(num.rating)
      let res=await axios.get("http://localhost:4000/rest")
      let filtered=res.data.filter((x)=>x.rating>=num.rating).sort((a,b)=>b.rating-a.rating)
      
      dispatch({type:num.name,payload:filtered})
    }

  const all=()=>{
    dispatch(getRest)
  }

  const card=async()=>{
    let res=await axios.get("http://localhost:4000/rest")
     let filtered=res.data.filter(x=>x.payment.card)
     dispatch({type:'Card',payload:filtered})
  }

  const cash=async()=>{
     let res=await axios.get("http://localhost:4000/rest")
     let filtered=res.data.filter(x=>x.payment.cash)
     dispatch({type:'cash',payload:filtered})
  }

  const upi=async()=>{
     let res=await axios.get("http://localhost:4000/rest")
     let filtered=res.data.filter(x=>x.payment.upi)
     dispatch({type:'upi',payload:filtered})
  }
 const asc=async()=>{
    let res=await axios.get("http://localhost:4000/rest")
     let filtered=res.data.sort((x,y)=>x.cost_for_two - y.cost_for_two)
    console.log(filtered)
    dispatch({type:'asc',payload:filtered})
 }
 const des=async()=>{
    let res=await axios.get("http://localhost:4000/rest")
     let filtered=res.data.sort((x,y)=>y.cost_for_two - x.cost_for_two)
    dispatch({type:'des',payload:filtered})
 }
    


    
  return (
    <div>
      <button onClick={()=>retrieve(rating4())}>4 & above</button>
      <button onClick={()=>retrieve(rating3())}>3 & above</button>
      <button onClick={()=>retrieve(rating2())}>2 & above</button>
      <button onClick={()=>retrieve(rating1())}>1 & above</button>
      <button onClick={all}>All</button>
      <button onClick={card}>card</button>
      <button onClick={cash}>cash</button>
      <button onClick={upi}>upi</button>
      
      <button onClick={asc}>Asc</button>
      <button onClick={des}>Des</button>
    </div>
  );
};

export default Buttons;
