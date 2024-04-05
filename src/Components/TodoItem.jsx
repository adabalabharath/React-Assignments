import React from 'react'

const TodoItem = (props) => {
    const {todo,deleteButton}=props
  return (
    <div>
        <ol>
        {todo.map((e)=>{
          return(<div key={e.id}>
            <li>{e.id}</li>
               <li >{e.name}</li>
               <button>Edit</button>
               <button onClick={()=>deleteButton(e.id)}>Delete</button>
          </div>)
        })
        }
        </ol></div>
  )
}

export default TodoItem