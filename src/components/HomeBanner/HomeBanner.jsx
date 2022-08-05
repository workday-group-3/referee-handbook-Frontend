import React from 'react'
import "./HomeBanner.css"
import { useHomeContext } from '../../contexts/home'

function HomeBanner() {

  const {currentSport} = useHomeContext()

  return (
    <div className='home-banner'>
      <h1 className="home-title">{currentSport}</h1>
    </div>
  )
}

export default HomeBanner