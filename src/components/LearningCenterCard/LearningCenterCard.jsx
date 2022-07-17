import React from 'react'

//styling
import "./LearningCenterCard.css"

//routing
import { Link } from 'react-router-dom'

//contexts
import { useLearningContext } from '../../contexts/learning'

function LearningCenterCard(props) {

  //context variables
  const { currentCourse, setCurrentCourse } = useLearningContext()

  
  const setCourseHandler = async () => {
    await setCurrentCourse(props.beginnerCourse)
    console.log("Current course is: ", props.currentCourse)
  }

  return (
    <div className='sport-card'>
      <Link to={`/learning/${props.beginnerCourse.sport_name}`}> <img className ="sport-img" onClick={setCourseHandler} src={props.beginnerCourse.beginner_cover_image_url} alt={`${props.beginnerCourse.sport_name} image`} ></img> </Link>
      <h1>{props.beginnerCourse.sport_name}</h1>
      <p className='sport-description'>{props.beginnerCourse.beginner_short_description}</p>
    </div>
  )
}

export default LearningCenterCard