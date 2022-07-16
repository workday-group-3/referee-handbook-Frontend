import React from 'react'

//styling
import "./LearningCenterCard.css"

//routing
import { Link } from 'react-router-dom'

function LearningCenterCard(props) {
  return (
    <div className='sport-card'>
      <Link to={`/learning/${props.sport_name}`}> <img className ="sport-img" src={props.beginnerCourse.beginner_cover_image_url} alt={`${props.beginnerCourse.sport_name} image`} ></img> </Link>
      <h1>{props.beginnerCourse.sport_name}</h1>
      <p className='sport-description'>{props.beginnerCourse.beginner_short_description}</p>
    </div>
  )
}

export default LearningCenterCard