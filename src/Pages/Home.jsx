    import React, { useState } from 'react'
    import Suggestions from '../Comps/Suggestions'
    import './Home.css'
    const Home = ({click,set}) => {

        const[text,setText]=useState("");
        const[fil,setFil]=useState([])
        const handleChange=(e)=>{
            let searchText=e.target.value;
            setText(searchText);
            set(searchText);
            debounce(searchText);
        }
    const get=async(text)=>{
        const response = await fetch('users.json');
                const users = await response.json();
                const filteredUsers = users.filter(user =>
                text && Object.values(user).some(value =>
                        value.toLowerCase().includes(text.toLowerCase())
                    )
                );
                setFil(filteredUsers);
        
    }
    
        const debounce=(text)=>{
        let timer = setTimeout(() => {
        get(text)
    }, 1000);

    return () => clearTimeout(timer)
    }

    return (
        <div className='container'>
            <input type='text' className='input' placeholder='Enter something'value={text}  onChange={handleChange} style={{width:'300px'}}/>
            <div className='result'>
                <ul>
            {fil.map((e,index)=>{
                return(
                    < div className='result' key={index}>
                <li className='suggestion'>
                    <Suggestions  names={e.name} data={e} clickfunc={click} />
                </li> 
                </div>  
                )
            })}</ul>
            </div>
        </div>
    )
    }

    export default Home