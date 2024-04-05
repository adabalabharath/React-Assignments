import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {

   const [text,setText]=useState("")

   const[todo,setTodo]=useState([])


const handleChange=(event)=>{
    setText(event.target.value);
 }
 const handleSubmit=()=>{
    let newItem={
        name:text,
        id:new Date().toDateString()+text
    }
     setTodo([...todo,newItem])
     setText("")
 }

const handleDelete=(id)=>{
   let newList= todo.filter((e)=>{
          return e.id!=id;
    }
    )
     setTodo(newList);
}
  return (
    <>
    <input type='text' value={text} onChange={handleChange}/>
    <button onClick={handleSubmit}>submit</button>
    <TodoItem todo={todo} deleteButton={handleDelete}/>
    </>
  )
}

export default TodoList