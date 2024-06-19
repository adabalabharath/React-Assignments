import axios from "axios";

export const getRest=async(dispatch)=>{
   try{
    let res =await axios.get('http://localhost:4000/rest');
    console.log(res.data)
    dispatch({type:'ALL',payload:res.data})
   }catch(error){
    console.log(error)
   }
}