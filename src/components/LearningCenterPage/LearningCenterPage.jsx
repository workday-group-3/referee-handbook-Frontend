//Necessary dependencies
import React from 'react'
import { useState } from 'react'

//Components
import LearningCenterBanner from '../LearningCenterBanner/LearningCenterBanner'
import LearningCenterCard from '../LearningCenterCard/LearningCenterCard'

//contexts
import { useLearningContext } from '../../contexts/learning'

//Routing
import { Link } from "react-router-dom"

//Styling
import "./LearningCenterPage.css"

function LearningCenterPage() {
  //extract state variables from learningContext
  const { beginnerCourses, isLoading, error } = useLearningContext()
  const [copy, setCopy] = useState([...beginnerCourses])
  console.log("Beginner courses: ", beginnerCourses)

  return (
    <div className='learning-center-page'>

        

        {/* Display the learning center's banner */}
        <LearningCenterBanner/>

        {/* Creates an an image and title card for each sport in the "beginnerCourse" state variable */}
        <div className='learning-cards'>

          {beginnerCourses.map((item) => {
            return ( <Link to={`/learning/${item.sport_name}`}><LearningCenterCard beginnerCourse={item}/></Link> )
          })}

        </div>


    </div>
  )
}

export default LearningCenterPage