//react imports
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";



//styling
import './App.css'

//Contexts
import { LearningContextProvider } from '../../contexts/learning';
import { AuthContextProvider } from '../../contexts/auth'

//component imports
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import LandingPage from '../LandingPage/LandingPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import Navbar from '../Navbar/Navbar'
import LearningCenterPage from '../LearningCenterPage/LearningCenterPage';
import NotFound from "../NotFound/NotFound"
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';



//returns our context providers with our App component nested inside.
export default function AppContainer() {
  return (
    <AuthContextProvider>
      <LearningContextProvider>
        <App />
      </LearningContextProvider>
    </AuthContextProvider>
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
          <Route path="/profile" element={<ProtectedRoute element = {<ProfilePage/>}/>}></Route>
          <Route path="/learning" element={<LearningCenterPage/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>

      


    </div>
  )
}


