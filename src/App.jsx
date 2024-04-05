import { useEffect, useState } from 'react';
import UserDetails from './Components/UserDetails';
import './App.css'
function App() {
  const [user,setUser] = useState([]);

useEffect(()=>{
	val()
},[])

let val = async () => {
    
        let response = await fetch('./data.json');
        let data = await response.json();
        console.log(data);
		setUser(data)
    
}
const asc = () => {
    // Sort the users array by their first names in ascending order
    const sortedUsers = [...user].sort((a, b) => a.first_name.localeCompare(b.first_name));
    setUser(sortedUsers);
    console.log(sortedUsers);
  }

  const des = () => {
    // Sort the users array by their first names in descending order
    const sortedUsers = [...user].sort((a, b) => b.first_name.localeCompare(a.first_name));
    setUser(sortedUsers);
    console.log(sortedUsers);
  }


  return (
    <>
	 <div className='buttons' >
                <button  onClick={asc}>Sort by Asc</button>
                <button  onClick={des}>Sort by Des</button>
    </div>
      <UserDetails users={user}/>
    </>
  );
}

export default App;
