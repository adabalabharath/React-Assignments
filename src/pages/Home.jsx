import axios from "axios";
import React, { useEffect, useState } from "react";
import Bike from "../components/Bike";
import '../Home.css'
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
const Home = () => {
  const [bike, setBike] = useState([]);
  const [isLoading, setLoading] = useState(false);
 
useEffect(() => {
    get();
  }, []);

  const get = async () => {
    try {
      setLoading(true) 
      let response = await axios.get("http://localhost:8080/bike");
      console.log(response.data);
      setBike(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  
  if(isLoading){
    
    return <Loading/>
  }
 
 return (
    <div className="bike">
        {bike.map((x)=>{
            return(<div key={x.id} className="bike-card">
             <Bike bikes={x} />
            </div>)
        })}
    </div>
  )
};

export default Home;
