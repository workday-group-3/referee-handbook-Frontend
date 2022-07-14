import React from 'react'
import './App.css'


//component imports
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import Navbar from '../Navbar/Navbar'

export default function App() {

  return (
    <div className="app">
      <Navbar/>
      <ProfilePage/>

    </div>
  )
}


