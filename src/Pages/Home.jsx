import React, { useEffect, useState } from 'react';
import Suggestions from '../Comps/Suggestions';
import './Home.css';
import _ from 'lodash'; // Import Lodash

const Home = ({ click, set }) => {
  const [fil, setFil] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    let searchText = e.target.value;
    setInput(searchText);
    set(searchText);
    // Call the debounced function
    //_.debounce(get, 1000)(searchText); // Pass searchText as an argument
  };

  useEffect(() => {
  const debouncedGet = _.debounce(get, 1000);
  debouncedGet(input);

  // Cleanup function to prevent memory leaks
  return () => debouncedGet.cancel();
}, [input]);

  const get = async (text) => {
    const response = await fetch('users.json');
    const users = await response.json();
    const filteredUsers = users.filter(user =>
      text && Object.values(user).some(value =>
        value.toLowerCase().includes(text.toLowerCase())
      )
    );
    setFil(filteredUsers);
  };

  return (
    <div className='container'>
      <input
        type='text'
        className='input'
        placeholder='Enter something'
        onBlur={() => _.debounce(get, 1000)(input)}
        onChange={handleChange}
        style={{ width: '300px' }}
        value={input}
      />
      <div className='result'>
        <ul>
          {fil.map((e, index) => (
            <div className='result' key={index}>
              <li className='suggestion'>
                <Suggestions names={e.name} data={e} clickfunc={click} />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
