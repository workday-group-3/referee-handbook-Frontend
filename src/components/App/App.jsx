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
import Footer from "../Footer/Footer"
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CoursesListPage from '../CoursesListPage/CoursesListPage';
import BeginnerCoursePage from '../BeginnerCoursePage/BeginnerCoursePage';
import CreateCourseForm from '../CreateCourseForm/CreateCourseForm';



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
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/profile" element={<ProtectedRoute element = {<ProfilePage/>}/>} />
          <Route path="/learning" element={<LearningCenterPage/>} />
          <Route path="/learning/:sportsName" element={<CoursesListPage/>} />
          <Route path="/learning/:sportsName/create" element={<ProtectedRoute element = {<CreateCourseForm/>}/>} />
          <Route path="/learning/:sportsName/beginner" element={<BeginnerCoursePage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

      


    </div>
  )
}


