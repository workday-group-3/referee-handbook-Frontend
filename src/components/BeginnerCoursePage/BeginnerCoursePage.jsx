import React from 'react'

//stylign
import "./BeginnerCoursePage.css"

//routing
import { useNavigate } from "react-router-dom"

//import context 
import { useLearningContext } from '../../contexts/learning'

//components
import LearningBanner from '../learningBanner/LearningBanner'


function BeginnerCoursePage() {
    
    const navigate = useNavigate()

    const { currentCourse, setcurrentCourse } = useLearningContext()
    
    //when the return button is clicked, user is redirected back to the course list page for their chosen sport
    async function handleReturn() { 
        
        navigate("/learning/:sportName")
    }

    return (
        <div className='beginner-course-page'>
            { currentCourse ? <LearningBanner courseName={currentCourse.sport_name}/> : null}
          
            <div className='button-section'>
                <button className="return-button" onClick={handleReturn}>Return</button>

            </div>

            <div className='timeline'>
                <h3>I am a timeline</h3>
            </div>

            {currentCourse ? 
            <div>
                <div className='rules-section'>
                    <h1>Rules : </h1>
                    <p>{currentCourse.beginner_rules}</p>
                </div>
                <div className='video-and-diagram-section'>
                    <div className='video'>
                    <iframe
                        src={currentCourse.beginner_tutorial_video_url}
                        width="500"
                        height="300"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />{" "}
                    </div>
                    <div className='diagram'>
                        <h1>Diagram</h1>
                        <img className="diagram-img" src={currentCourse.beginner_field_diagram_url} alt="beginner field diagram" />
                    </div>
                </div>
            </div> : null}
            
        </div>
    )
}

export default BeginnerCoursePage