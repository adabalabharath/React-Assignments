import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthContexProvider";
import '../Home.css'
const Home = () => {
  const { data, setData, email, setEmail, password, setPassword } =
    useContext(AuthContext);

  const get = async () => {
   try{ let response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    let obj = response.data;
    console.log(obj);
    if (obj.token) {
      setData({ isAuth: true, loading: false, error: null, token: obj.token });
    }   
    }catch(error){
       document.getElementById('err').innerText="No user exists"
       setEmail("");
    setPassword("");
    }
  };

  return (
    <div className="login">

      <input
        type="email"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={get} disabled={!email || !password}>submit</button>
      <h3 id="err"></h3>
    </div>
  );
};

export default Home;
