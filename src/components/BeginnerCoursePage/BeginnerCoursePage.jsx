import React from 'react'

//stylign
import "./BeginnerCoursePage.css"

//import context 
import { useLearningContext } from '../../contexts/learning'

//components
import LearningBanner from '../learningBanner/LearningBanner'


function BeginnerCoursePage() {

    const { currentCourse } = useLearningContext()

    return (
        <div className='beginnner-course-page'>
            { currentCourse ? <LearningBanner courseName={currentCourse.sport_name}/> : null}
            <div className='timeline'>
                <h3>I am a timeline</h3>
            </div>
            <div className='return-button'></div>
            <div className='rules-section'></div>
            <div className='video-and-diagram-section'></div>
        </div>
    )
}

export default BeginnerCoursePage