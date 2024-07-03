import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import {
  BrowserRouter ,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={  user ? <Home /> : <Register />}/>
      //<Route  path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
      <Route path="/register"element=   {user ? <Navigate to="/" /> : <Register />}/>
      <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
  </BrowserRouter>
      </>
      
      )
  }
  
  
   
  
