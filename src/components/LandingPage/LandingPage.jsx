import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

import LandingImageCarousel from '../LandingImageCarousel/LandingImageCarousel'
import Carousel from '../Carousel/Carousel';

import heroImg from "../../assets/hero-img.jpg"
import { useAuthContext } from '../../contexts/auth';

export default function LandingPage() {

  const {user} = useAuthContext()

  return (
    <div className="landing-page">
      <div className='hero'>
        <img className='hero-img' src={heroImg} alt="hero img"></img>
        <div className='cta'>
          <h1>Referee's Handbook</h1>
          <h2>Play smarter, not harder</h2>
        </div>
        {user?.email ? null : <div className='landing-btn'>
          <Button className='login-btn'><Link to="/login">Login</Link></Button>
          <Button className='signup-btn'><Link to="/register">Sign Up</Link></Button>
        </div>}
        
      </div>
      {/* <LandingImageCarousel/> */}
      <Carousel/>
    </div>
  )
}
