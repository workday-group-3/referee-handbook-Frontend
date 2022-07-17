import React from 'react'

//styling
import "./LearningBanner.css"

function LearningBanner(props) {
  return (
    <div className='learning-banner'>
        <h2>welcome to the world of {props.courseName}</h2>
    </div>
  )
}

export default LearningBanner