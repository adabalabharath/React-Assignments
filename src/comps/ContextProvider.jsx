import React, { createContext, useState } from "react";

export const Auth = createContext();
const ContextProvider = ({ children }) => {
  const[initial,setInitial]= useState ({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });
   const [token,setToken]=useState('')
  return <Auth.Provider value={{initial,setInitial,token,setToken}}>{children}</Auth.Provider>;
};

export default ContextProvider;
