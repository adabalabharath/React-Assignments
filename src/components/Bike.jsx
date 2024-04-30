import React, { useEffect } from "react";
import styles from "../Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
const Bike = ({ bikes }) => {
  let navigate=useNavigate();
  const nav=()=>{
    navigate(`/bike/${bikes.id}`)
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={bikes.imageUrl} style={{ width: "100%", height: "150px" }} />
        <div className={styles.nam}>
          <h2 data-testid="bike_name" className={styles.bike}>{bikes.bikeName}</h2>
          <h2 data-testid="bike_hourly-rate" className={styles.rate}>{bikes.hourlyRate}Rs/hr</h2>
        </div>
        <h3 data-testid="bike_number" className={styles.number}>Bike Number: {bikes.id}</h3>
        <h3 data-testid="bike_available" className={styles.available}>Bikes available :{bikes.available}</h3>
        <button data-testid="bike_booking-btn" onClick={nav}  disabled={bikes.available===0}>Book Now</button>
      </div>
    </div>
  );
};

export default Bike;
