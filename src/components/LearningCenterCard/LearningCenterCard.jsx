import React from 'react'

//styling
import "./LearningCenterCard.css"

function LearningCenterCard(props) {
  return (
    <div className='sport-card'>
      <h1>{props.sport}</h1>
    </div>
  )
}

export default LearningCenterCard