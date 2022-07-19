import React from 'react'
import "./HomeBanner.css"

import banner from "../../assets/home-banner.jpeg"

function HomeBanner() {
  return (
    <div className='home-banner'>
        <img className="banner-img" src={banner} alt="Home page banner"></img>
    </div>
  )
}

export default HomeBanner