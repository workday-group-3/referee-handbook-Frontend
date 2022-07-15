import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//styling
import './App.css'

//Contexts
import { LearningContextProvider } from '../../contexts/learning';

//component imports
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import LandingPage from '../LandingPage/LandingPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import Navbar from '../Navbar/Navbar'
import LearningCenterPage from '../LearningCenterPage/LearningCenterPage';
import NotFound from "../NotFound/NotFound"


//returns our context providers with our App component nested inside.
export default function AppContainer() {
  return (
    <LearningContextProvider>
      <App />
    </LearningContextProvider>
  )
}


function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/learning" element={<LearningCenterPage/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>

      


    </div>
  )
}


