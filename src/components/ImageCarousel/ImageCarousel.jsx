import React from 'react'
import './ImageCarousel.css'

export default function ImageCarousel() {
    return(
      <div className='image-carousel'>
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
            <button className='forward-btn'></button>
            <button className='back-btn'></button>
          </div>
          <div className='dots'>
            <p className='dot'></p>
            <p className='dot'></p>
            <p className='dot'></p>
          </div>
      </div>
    ) 
  }
  
  