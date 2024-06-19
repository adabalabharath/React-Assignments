import React from "react";

const Details = ({ data }) => {
    console.log(data.avatar)
  return (
    <div>
      <h1>Form Details</h1>
      <h3>Name :{data.firstName}</h3>
      <h3>Name :{data.lastName}</h3>
      <h3>Name :{data.email}</h3>
      <h3>Name :{data.phNumber}</h3>
      <h3>Name :{data.password}</h3>
      <h3>Name :{data.country}</h3>
      <h3>Name :{data.birthDate}</h3>
      <h3>Name :{data.gender}</h3>
      <h3>Name :{data.marriageStatus ? "Married" : "Single"}</h3>

    </div>
  );
};

export default Details;
