import React from 'react'
import '../Todos.css'
const Todos = ({todo,start}) => {
  return (
    <div className="todo"
      draggable="true"
      id={todo.id}
      onDragStart={(e) => start(e, todo.id)}
      style={{cursor:'pointer'}}>{todo.task}</div>
  )
}

export default Todos