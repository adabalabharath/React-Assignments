import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './comp/Buttons'
import Restaurant from './comp/Restaurant'
import { useDispatch, useSelector } from 'react-redux'
import { getRest } from './redux/action'

function App() {
  
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getRest);
  }, [dispatch]);
  return (
    <>
     <h1>Restaurant Details</h1>
     <Buttons/>
     <Restaurant/>
    </>
  )
}

export default App
