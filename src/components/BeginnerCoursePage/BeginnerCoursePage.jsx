import React from 'react'

//stylign
import "./BeginnerCoursePage.css"
import Button from '@mui/material/Button';

//routing
import { useNavigate } from "react-router-dom"

//import context 
import { useLearningContext } from '../../contexts/learning'

//components
import LearningBanner from '../learningBanner/LearningBanner'


function BeginnerCoursePage() {

    
    const navigate = useNavigate()
    
    const { currentCourse, setcurrentCourse } = useLearningContext()
    
    const formattedRules = currentCourse ? currentCourse.beginner_rules.replaceAll("{b}", "•") : null
    // formattedRules.splice()
    
    
    //when the return button is clicked, user is redirected back to the course list page for their chosen sport
    async function handleReturn() { 
        console.log(currentCourse.beginner_tutorial_video_url)
        navigate("/learning/:sportName")
    }

    return (
        <div className='beginner-course-page'>
            { currentCourse ? <LearningBanner courseName={currentCourse.sport_name}/> : null}
          
            <div className='button-section'>
                <div>
                    <Button variant="contained" size="large" className="return-button" onClick={handleReturn}>Yes</Button>
                </div>
            </div>

            <div className='timeline'>
                <h3>I am a timeline</h3>
            </div>

            {currentCourse ? 
            <div>

                <div className='rules-section'>
                    <h1>Rules : </h1>
                    <p className='rules-paragraph'>{formattedRules}</p>
                </div>

                <div className='video-and-diagram-section'>

                    <div className='video'>
                        <h1>Tutorial Video</h1>
                        <iframe
                            src={currentCourse.beginner_tutorial_video_url}
                            width="500"
                            height="300"
                            allowFullScreen
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