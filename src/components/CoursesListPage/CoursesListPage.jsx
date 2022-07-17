import React from 'react'

//styling
import "./CoursesListPage.css"

//import components
import LearningBanner from '../learningBanner/LearningBanner'

//contexts
import { useLearningContext } from '../../contexts/learning'

function CoursesListPage(props) {
  
  //context variables
  const { currentCourse } = useLearningContext()
  console.log("current course is: ", currentCourse.sport_name)

  return (
    <div className='courses-list'>

      {/* Once the promise to add the current course to our currentCourse context variable has been
          fulfilled, render the LearningBanner component */}
      { currentCourse ? <LearningBanner courseName={currentCourse.sport_name}/> : null}


      <div className='beginner-course-option'>
       
          <img className='beginner-course-image' src={currentCourse.beginner_cover_image_url} alt={`${currentCourse.sport_name} image`} ></img>
        

      </div>


      <h1>Courses list</h1>
    </div>
  )
}

export default CoursesListPage