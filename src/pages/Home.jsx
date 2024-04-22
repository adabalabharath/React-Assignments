import axios from "axios";
import React, { useEffect, useState } from "react";
import '../home.css';
import Todos from '../components/Todos'

const Home = ({todos,fetchData}) => {
  
  const handleDragStart = (ev, id) => {
    ev.dataTransfer.setData("text/plain", String(id));
  };

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

const drop = async (ev) => {
  ev.preventDefault();
  const draggedId = ev.dataTransfer.getData('text/plain');
  const newStatus = ev.currentTarget.className;
  
  console.log("Dragged ID:", draggedId);
  console.log("New Status:", newStatus);

  try {
    
    await axios.patch(`http://localhost:3000/todos/${draggedId}`, { status: newStatus });

   
    fetchData();
  } catch (error) {
    console.log("Error:", error);
  }
};



  return (
    <div className="home">
      <div className="Not Started" onDrop={drop} onDragOver={allowDrop} id="one">
        <h3>notStarted</h3>
        {todos.map((x) => {
          return (
            <div key={x.id}>
              {x.status === "Not Started" && (
               <Todos start={handleDragStart} todo={x}/>
              )}
            </div>
          );
        })}
      </div>
      <div className="In Progress" onDrop={drop} onDragOver={allowDrop} id="two">
        <h3>inProgress</h3>
        {todos.map((x) => {
          return (
            <div key={x.id}>
              {x.status === "In Progress" && (
                <Todos start={handleDragStart} todo={x}/>
              )}
            </div>
          );
        })}
      </div>
      <div className="Completed" onDrop={drop} onDragOver={allowDrop} id="three">
        <h3>Completed</h3>
        {todos.map((x) => {
          return (
            <div key={x.id}>
              {x.status === "Completed" && (
               <Todos start={handleDragStart} todo={x}/>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
