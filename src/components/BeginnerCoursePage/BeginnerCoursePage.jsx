import React from 'react'

//stylign
import "./BeginnerCoursePage.css"

//import context 
import { useLearningContext } from '../../contexts/learning'


function BeginnerCoursePage() {

    const { currentCourse } = useLearningContext()

    return (
        <div>BeginnerCoursePage</div>
    )
}

export default BeginnerCoursePage