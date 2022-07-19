import React, { useEffect, useState } from 'react'

//styling
import "./CoursesListPage.css"

//import components
import LearningSubBanner from '../LearningSubBanner/LearningSubBanner'

//contexts
import { useLearningContext } from '../../contexts/learning'

//routing
import { Link } from "react-router-dom"
import apiClient from '../../services/apiClient'

function CoursesListPage(props) {
  
  //context variables


  let currentCourse = JSON.parse(localStorage.getItem("current_course"))

  

  return (
    <div className='courses-list'>

      {/* Once the promise to add the current course to our currentCourse context variable has been
          fulfilled, render the LearningBanner component */}
      { currentCourse ? <LearningSubBanner courseName={currentCourse.sport_name} showButtons="false"/> : null}

     
      <Link className ="course-link" to={`/learning/${currentCourse.sport_name}/beginner`}>

        <div className='beginner-course-option'>

          <div className='img'>
            <img className='course-image' src={currentCourse.beginner_cover_image_url} alt={`${currentCourse.sport_name} image`} ></img>
          </div>
          <div className='course-text'>
            <h1 className="course-text-title"><em>Beginner Course</em></h1>
            <p className="course-text-body">Our beginner {currentCourse.sport_name} course offers an indepth as well as a big picture overview of the sport. Learn about it's history, rules and regulations, and objectives. To aid in your educational journey, we've included a how-to video as well as a diagram of the field to aid in visualization!</p>
        </div>

        </div>

      </Link> 
      

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