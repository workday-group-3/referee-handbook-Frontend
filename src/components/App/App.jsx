import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//styling
import './App.css'

//component imports
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import Navbar from '../Navbar/Navbar'
import LearningCenterPage from '../LearningCenterPage/LearningCenterPage';

export default function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <Navbar/>
        <ProfilePage/>

        <Routes>
          <Route path="/learning" element={<LearningCenterPage/>}></Route>

        </Routes>
      </BrowserRouter>

      

    </div>
  )
}


