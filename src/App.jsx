import { useEffect, useState } from 'react';
import UserDetails from './UserDetails';

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
	 <div className='buttons'>
                <button style={{ backgroundColor: "burlywood", margin: "15px" }} onClick={asc}>Sort by Asc</button>
                <button style={{ backgroundColor: "burlywood", margin: "15px" }} onClick={des}>Sort by Des</button>
    </div>
      <UserDetails users={user}/>
    </>
  );
}

export default App;
