    import React, { useEffect } from 'react'
    import { useState } from 'react';
    import './RestaurantDetails.css';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faStar } from '@fortawesome/free-solid-svg-icons';
    const RestaurantDetails = (props) => {
        
        const {restaurant}=props;
        const[rest,setRest]=useState([])

        useEffect(() => {
            setRest(restaurant);
        }, [restaurant]);
    
    
    const cash=()=>{
      console.log(restaurant)
      let pay=restaurant.filter(x=>x.payment['cash']==true).sort((x,y)=>y.rating-x.rating)
      setRest(pay)

    }
    const card=()=>{
        
      let pay=restaurant.filter(x=>x.payment['card']==true).sort((x,y)=>y.rating-x.rating)
      setRest(pay)

    }
    const upi=()=>{
       
      let pay=restaurant.filter(x=>x.payment['upi']==true).sort((x,y)=>y.rating-x.rating)
      setRest(pay)

    }

    const All=()=>{
      setRest(restaurant)

    }

    const Desc = () => {
        let high = restaurant.filter(x=>x).sort((a,b) => b.cost_for_two-a.cost_for_two);
        console.log(high)
        setRest(high);
    }

    const Asc = () => {
        let low = [...restaurant].sort((a,b) => a.cost_for_two-b.cost_for_two);
        setRest(low);
    }

    const filter=(r)=>{
        console.log('clicked'+" "+r+'button' )
       let a= restaurant.filter((x)=>x.rating>=r).sort((x,y)=>y.rating-x.rating)
       setRest(a)
    }
    return (
    <div>
    <h3>Restaurant Details</h3>
        <button onClick={()=>filter(4)}>4 star & above</button>
        <button onClick={()=>filter(3)}>3 Star & above</button>
        <button onClick={()=>filter(2)}>2 star & above</button>
        <button  onClick={()=>filter(1)}>1 star & above</button>
        <button  onClick={cash}>cash</button>
        <button  onClick={card}>card</button>
        <button  onClick={upi}>upi</button>
        <button  onClick={All}>All</button>
        <button  onClick={Desc}>High to low</button>
        <button  onClick={Asc}>low to high</button>
            
        <ul className='ul'>
        {                     
                       rest.map((e) => (
            <div key={e.id} className='list'>
                <img src={e.image}/>
                <div className='middle'>
                <li style={{fontWeight:'bold'}}>{e.restaurantName}</li>
                <li>{e.categories.map((x) => x+" ")}</li>
                <li>Cost for one: {e.cost_for_one}</li>
                <li>Cost for two: {e.cost_for_two}</li>
                <li>
                    Accepts: {e.payment.cash?'cash.':''}{e.payment.card?'card.':''}{e.payment.upi?'upi.':''}           </li>
                    </div>
                    <div className='rating'>
                    
                    <li className='r' ><FontAwesomeIcon icon={faStar} style={{color:'yellow'}}/> {e.rating}</li>
                    <li className='v'>{e.votes} votes</li>
                    <li className='v'>{e.reviews} reviews</li>
                    </div>
                </div> 
            ))
        }
        </ul>
    </div>
    );

    }

    export default RestaurantDetails