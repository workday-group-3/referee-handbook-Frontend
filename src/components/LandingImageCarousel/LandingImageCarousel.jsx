import React from 'react'
import './LandingImageCarousel.css'

export default function LandingImageCarousel() {
    return(
      <div className='landing-image-carousel'>
          <div className='slide-container'>
            <div className='slide'>
              <img className='slide-img'></img>
              <div className='slide-description'>
                <p></p>
              </div>
            </div>
            <div className='slide'>
              <img className='slide-img'></img>
              <div className='slide-description'>
                <p></p>
              </div>
            </div>
            <div className='slide'>
              <img className='slide-img'></img>
              <div className='slide-description'>
                <p></p>
              </div>
            </div>
            <div className='slide'>
              <img className='slide-img'></img>
              <div className='slide-description'>
                <p></p>
              </div>
            </div>
            <button className='forward-btn'>Forwards</button>
            <button className='back-btn'>Backwards</button>
          </div>
          <div className='dots'>
            <p className='dot'></p>
            <p className='dot'></p>
            <p className='dot'></p>
          </div>
      </div>
    ) 
  }
  
  