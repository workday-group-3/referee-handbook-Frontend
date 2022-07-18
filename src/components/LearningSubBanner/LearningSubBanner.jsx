import React from 'react'

//styling
import "./LearningSubBanner.css"

function LearningSubBanner(props) {
  return (
    <div className='learning-sub-banner'>
        <h2>Welcome to the world of {props.courseName}</h2>
    </div>
  )
}

export default LearningSubBanner