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

      { currentCourse ? <LearningBanner courseName={currentCourse.sport_name}/> : null}

      <h1>Courses list</h1>
    </div>
  )
}

export default CoursesListPage