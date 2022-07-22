//Necessary dependencies
import React from 'react'
import { useState } from 'react'

//Components
import LearningCenterBanner from '../LearningCenterBanner/LearningCenterBanner'
import LearningCenterCard from '../LearningCenterCard/LearningCenterCard'

//contexts
import { useLearningContext } from '../../contexts/learning'

//Styling
import "./LearningCenterPage.css"

function LearningCenterPage() {
  //extract state variables from learningContext
  const { beginnerCourses, isLoading, error } = useLearningContext()
  const [copy, setCopy] = useState([...beginnerCourses]) //potentially useless

  return (
    <div className='learning-center-page'>

        

        {/* Display the learning center's banner */}
        <div className='learning-banner'>
          <LearningCenterBanner/>
        </div>
        

        {/* Creates an an image and title card for each sport in the "beginnerCourse" state variable */}
        <div className='learning-cards'>

          {beginnerCourses.map((item) => {
            return (<LearningCenterCard beginnerCourse={item}/>)
          })}

        </div>


    </div>
  )
}

export default LearningCenterPage