import React from 'react'

//stylign
import "./BeginnerCoursePage.css"

//routing
import { useNavigate } from "react-router-dom"

//import context 
import { useLearningContext } from '../../contexts/learning'

//components
import LearningSubBanner from '../LearningSubBanner/LearningSubBanner'

import flagImg from "../../assets/flag.png"


function BeginnerCoursePage() {
    
    const { currentCourse, setcurrentCourse } = useLearningContext()
    
    const formattedRules = currentCourse ? currentCourse.beginner_rules.replaceAll("{b}", "•") : null
    // formattedRules.splice()
    return (
        <div className='beginner-course-page'>
            { currentCourse ? <LearningSubBanner courseName={currentCourse.sport_name} showButtons="true"/> : null}

            <div className='timeline'>
                { currentCourse ? <iframe src={currentCourse.beginner_history_timeline} width='100%'  webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe> : null}                  
            </div>

            {currentCourse ? 
            <div>
                <div className='video-and-diagram-section'>

                    <div className='video'>
                        <h1 className="video-header">Tutorial Video</h1>
                        <iframe
                            src={currentCourse.beginner_tutorial_video_url}
                            width="500"
                            height="300"
                            allowFullScreen
                        />{" "}
                    </div>

                    <div className='diagram'>
                        <h1 className="diagram-header">Diagram</h1>
                        <img className="diagram-img" src={currentCourse.beginner_field_diagram_url} alt="beginner field diagram" />
                    </div>
                    
                </div>
                
                
                <div className='rules-section'>
                    <div className='flag'><img src={flagImg} alt="flag image" className='flag-img'></img></div>
                    <h1 className ="rules-section-title"><em>Rules</em></h1>
                    <p className='rules-paragraph'>{formattedRules}</p>
                </div>

                

            </div> : null}
            
        </div>
    )
}
export default BeginnerCoursePage