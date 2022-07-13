import React from 'react'
import './LandingPage.css'

import ImageCarousel from '../ImageCarousel/ImageCarousel'

import heroImg from "../../assets/pexels-steshka-willems-1661950.jpg"

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className='hero'>
        <img className='hero-img' src={heroImg} alt="hero img"></img>
        <div className='cta'>
          <h1>Referee's Handbook</h1>
          <h2>Play smarter, not harder</h2>
        </div>
        <div className='landing-btn'>
          <button className='login-btn'>Login</button>
          <button className='signup-btn'>Sign Up</button>
        </div>
      </div>
      <ImageCarousel/>
    </div>
  )
}
