import React from 'react';
import '../MostPowerful.css'
const MostPowerful = ({ full }) => {
  // Handle potential scenario where there might not be a most powerful superhero yet
 
  return (
    <div className='all'>
      <h2>Most Powerful Superhero</h2>
      <div className='single' key={full.id}>
        <h2>Name: {full.name}</h2>
        <h3>Height: {full.height} cms</h3>
        <h3>Weight: {full.weight} kgs</h3>
        <h3>Power: {full.power}</h3>
      </div>
    </div>
  );
};

export default MostPowerful;
