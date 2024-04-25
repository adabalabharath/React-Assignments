import React, { useContext } from "react";
import { AuthContext } from "./AuthContexProvider";

const DashBoard = () => {
  const { data, setData,email,password, setEmail, setPassword } = useContext(AuthContext);

  const auth = () => {
    setData({ isAuth: false, loading: false, error: null, token: "" });
    console.log(email)
    console.log(password)
    
  };
  return (
    <div>
      <h3>token :{data.token}</h3>
      <button onClick={auth}>Logout</button>
    </div>
  );
};

export default DashBoard;
