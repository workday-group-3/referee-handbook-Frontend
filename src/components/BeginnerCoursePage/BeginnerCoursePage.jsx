import React from 'react'

//stylign
import "./BeginnerCoursePage.css"
import Button from '@mui/material/Button';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

//routing
import { useNavigate } from "react-router-dom"

//import context 
import { useLearningContext } from '../../contexts/learning'

//components
import LearningSubBanner from '../LearningSubBanner/LearningSubBanner'


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
            { currentCourse ? <LearningSubBanner courseName={currentCourse.sport_name}/> : null}
          
            <div className='button-section'>
                    <ul>
                        <li><button onClick={handleReturn}><ArrowBackIosNewRoundedIcon className='button-icon'/></button></li>
                        <li><button><FavoriteBorderRoundedIcon className='button-icon'/></button></li>
                    </ul>
            </div>

            <div className='timeline'>
                <iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk&font=Default&lang=en&initial_zoom=2&height=100%" width="100%" frameborder="0"></iframe>
                                
            </div>

            {currentCourse ? 
            <div>
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
                <div className='rules-section'>
                    <h1>Rules : </h1>
                    <p className='rules-paragraph'>{formattedRules}</p>
                </div>

                

            </div> : null}
            
        </div>
    )
}

export default BeginnerCoursePage