import React from 'react'

//styling and images

import SportsBanner from "../../Images/sports.jpg"

function LearningCenterBanner() {
  return (
    <div className='learning-center-banner'>
        <img className="sports-img" src={SportsBanner} alt="Sports banner"></img>
    </div>
  )
}

export default LearningCenterBanner