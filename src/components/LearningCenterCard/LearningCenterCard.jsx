import React from 'react'

//styling
import "./LearningCenterCard.css"

function LearningCenterCard(props) {
  return (
    <div className='sport-card'>
      <h1>{props.beginnerCourse.sport_name}</h1>
    </div>
  )
}

export default LearningCenterCard