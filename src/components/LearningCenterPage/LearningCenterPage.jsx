import React from 'react'
import { useState } from 'react'

import LearningCenterBanner from '../LearningCenterBanner/LearningCenterBanner'
import LearningCenterCard from '../LearningCenterCard/LearningCenterCard'
import EmailUs from "../EmailUs/EmailUs"

import { useLearningContext } from '../../contexts/learning'

import "./LearningCenterPage.css"

function LearningCenterPage() {
  //extract state variables from learningContext
  const { beginnerCourses} = useLearningContext()

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
        
        <div className='email-us-section'>
          <EmailUs />
        </div>

    </div>
  )
}

export default LearningCenterPage