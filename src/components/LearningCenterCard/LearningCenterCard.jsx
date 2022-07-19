import React from 'react'

//styling
import "./LearningCenterCard.css"

// mui imports
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//routing
import { Link } from 'react-router-dom'

//contexts
import { useLearningContext } from '../../contexts/learning'

function LearningCenterCard(props) {

  //context variables
  const { expandedCourse, setExpandedCourse } = useLearningContext()
  
  const setCourseHandler = async () => {
    console.log(props.beginnerCourse)
    
    localStorage.setItem("current_course", JSON.stringify(props.beginnerCourse))
    console.log("Current course is: ", localStorage.getItem("current_course"))
    
  }

  const setExpand = async () => {
    await setExpandedCourse(props.beginnerCourse.sport_name)
    console.log("set", expandedCourse)
  }

  const setFold = async () => {
    await setExpandedCourse(null)
  }

  return (
    <div className='sport-card'>
      <Link to={`/learning/${props.beginnerCourse.sport_name}`}> <img className ="sport-img" onClick={setCourseHandler} src={props.beginnerCourse.beginner_cover_image_url} alt={`${props.beginnerCourse.sport_name} image`} ></img> </Link>
      <h1>{props.beginnerCourse.sport_name}</h1>
      <div className='description'>
      <p className={expandedCourse == props.beginnerCourse.sport_name ? "expanded sport-description" : "sport-description"}>{props.beginnerCourse.beginner_short_description}</p>
      {expandedCourse !== props.beginnerCourse.sport_name ? (<KeyboardArrowDownIcon onClick={setExpand}/>) : (<KeyboardArrowUpIcon onClick={setFold}/>)}
      
      </div>
    </div>
  )
}

export default LearningCenterCard