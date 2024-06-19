import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContextProvider";

const Table = () => {
  const { data, setData } = useContext(DataContext);

  const fetch = async () => {
    let response = await axios.get("http://localhost:3000/user");
    setData(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleId = (e) => {
    let ID = Number(e.target.value);
    if (ID) {
      let d = data.find((x) => x.id === ID);
      setData(d);
    } else {
      fetch();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let d;

    if (name === "firstName") {
      d = data.filter((x) => x.firstname.toLowerCase().includes(value));
      setData(d);
      if (value === "") {
        fetch();
      }
    } else if (name === "lastName") {
      d = data.filter((x) => x.lastname.toLowerCase().includes(value));
      setData(d);
      if (value === "") {
        fetch();
      }
    } else if (name === "email") {
      d = data.filter((x) => x.email.toLowerCase().includes(value));
      setData(d);
      if (value === "") {
        fetch();
      }
    } else if (name === "department") {
      d = data.filter((x) => x.department.toLowerCase().includes(value));
      setData(d);
      if (value === "") {
        fetch();
      }
    } else if (name === "dateJoined") {
      d = data.filter((x) => x.date_joined.toLowerCase().includes(value));
      setData(d);
      if (value === "") {
        fetch();
      }
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Date Joined</th>
          </tr>
          <tr>
            <th>
              <input type="text" name="id" onChange={handleId} />
            </th>
            <th>
              <input type="text" name="firstName" onChange={handleChange} />
            </th>
            <th>
              <input type="text" name="lastName" onChange={handleChange} />
            </th>
            <th>
              <input type="text" name="email" onChange={handleChange} />
            </th>
            <th>
              <input type="text" name="department" onChange={handleChange} />
            </th>
            <th>
              <input type="text" name="dateJoined" onChange={handleChange} />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.firstname}</td>
                <td>{x.lastname}</td>
                <td>{x.email}</td>
                <td>{x.department}</td>
                <td>{x.date_joined}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>{data.id}</td>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.email}</td>
              <td>{data.department}</td>
              <td>{data.date_joined}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
