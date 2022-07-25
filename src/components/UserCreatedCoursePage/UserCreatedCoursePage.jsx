import React from 'react'

import "./UserCreatedCoursePage.css"

import LearningSubBanner from '../LearningSubBanner/LearningSubBanner'
import { CenterFocusStrong } from '@mui/icons-material'

function UserCreatedCoursePage() {

    let currentSport = JSON.parse(localStorage.getItem("current_course"))

    let currentCourse = JSON.parse(localStorage.getItem("current_user_course"))

    //regular expression to extract youtube video code 
    const regex = "watch\?v\=(.*)\&"
    const match = currentCourse.course_tutorial_video_url.match(/watch\?v\=(.*)\&/)[1]
    const ourUrl = "https://www.youtube.com/embed/" + match;

    return (
        <div className='user-create-course'>
            
            {/* Conditionally render Learning sub banner if the current course is stored locally (purpose: user persistance) */}
            <div className='sub-banner'>
                { currentCourse ? <LearningSubBanner courseName={currentSport.sport_name} showButtons="true"/> : null} 
            </div>

            {/* Render chunk of user created course content  */}
            <div className='main-user-content'>

                {/* Title and date */}
                <span className='created-by'>
                    <h3 className='cb-username'>{currentCourse.course_title} <br/> Created by username</h3>
                </span>

                {/* Line separator */}
                <span className='line-break'>
                    <hr style={{
                        height: 1.5,
                        borderColor : '#000000'
                    }}/>
                </span>

                {/* Course content descriptions, both short and long */}
                <section className='short-description'>
                    <p>{currentCourse.course_short_description}</p>
                </section>
                <section className='long-description'>
                    <p>{currentCourse.course_content}</p>
                </section>
            </div>

            {/* Renders youtube video onto the screen  */}
            <div className='video-container'>
                <iframe
                    src={ourUrl}
                    width="750"
                    height="400"
                    allowFullScreen
                />{" "}
            </div>
            
            {/* Renders tips and tricks section  */}
            <div className='tips-and-tricks'>

                {/* Title  */}
                <h2 className='tips-and-tricks-title'>{'Tips & Tricks'}</h2>

                {/* Line separator */}
                <span className='line-break'>
                    <hr style={{
                        height: 1.5,
                        borderColor : '#000000'
                    }}/>
                </span>
                
                {/* Tips and tricks text section */}
                <p className='tips-and-tricks-text'>{currentCourse.course_tips_tricks}</p>
            </div>
        </div>
    )
}

export default UserCreatedCoursePage