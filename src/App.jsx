import { useState, useEffect } from 'react';
import Home from './pages/Home';
import axios from 'axios';

function App() {
  const [todoN, setTodo] = useState('');

  // Function to handle input change
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  // Function to handle adding todo
  const handleAddTodo = async () => {
    try {
      
      await axios.post("http://localhost:3000/todos", {
        task: todoN,
        status: "Not Started"
      });
      
      setTodo('');
     
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  // Function to fetch todos from server
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // State to hold todos
  const [todos, setTodos] = useState([]);

  // Fetch initial todos when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='whole'>
      <h1 style={{textAlign:'center'}}>Todo App</h1>
      <div className='home'>
       
        <input type="text" value={todoN} onChange={handleInputChange} />
       
        <button onClick={handleAddTodo}>Add</button>
      </div>
   
      <Home todos={todos} fetchData={fetchData} />
    </div>
  );
}

export default App;
