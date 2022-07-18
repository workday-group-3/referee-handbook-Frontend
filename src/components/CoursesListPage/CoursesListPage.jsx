import React from 'react'

//styling
import "./CoursesListPage.css"

//import components
import LearningBanner from '../learningBanner/LearningBanner'

//contexts
import { useLearningContext } from '../../contexts/learning'

//routing
import { Link } from "react-router-dom"

function CoursesListPage(props) {
  
  //context variables
  const { currentCourse } = useLearningContext()
  console.log("current course is: ", currentCourse.sport_name)

  return (
    <div className='courses-list'>

      {/* Once the promise to add the current course to our currentCourse context variable has been
          fulfilled, render the LearningBanner component */}
      { currentCourse ? <LearningBanner courseName={currentCourse.sport_name}/> : null}

      {/* Ensures a current course has been selected */}
      { currentCourse ? 
      
      <Link to={`/learning/${currentCourse.sport_name}/beginner`}>

        <div className='beginner-course-option'>

          <div className='img'>
            <img className='course-image' src={currentCourse.beginner_cover_image_url} alt={`${currentCourse.sport_name} image`} ></img>
          </div>
          <div className='course-text'>
            <h1>Beginner course</h1>
            <p>Our beginner {currentCourse.sport_name} course offers an indepth as well as a big picture overview of the sport. Learn about it's history, rules and regulations, and objectives. To aid in your educational journey, we've included a how-to video as well as a diagram of the field to aid in visualization!</p>
        </div>

        </div>

      </Link> : null}
      

      {/* To be implemented when we get to the user courses feature */}
      {/* <div className='user-course-option'>
      
          <div className='img'>
            <img className='course-image' src={currentCourse.beginner_cover_image_url} alt={`${currentCourse.sport_name} image`} ></img>
          </div>
          <div className='course-text'>
            <h1>User courses</h1>
            <p>Our user {currentCourse.sport_name} courses offer individualized and specific sports tips and tricks for beginner and intermediate players alike. Come see what the sports education community has to offer!</p>
          </div>

      </div> */}
    </div>
  )
}

export default CoursesListPage